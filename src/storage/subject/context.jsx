//#region Imports

import { createContext, useCallback, useContext, useRef, useState } from 'react';
import CONTEXT_INITIAL_STATE from 'utils/constants/context-initial-state';
import SUBJECT_FIELDS from 'utils/constants/field/subject';
import PAGEABLE_FIELDS from 'utils/constants/field/pageable';
import isPresent from 'utils/functions/isPresent';
import useRequestState from 'utils/hooks/useRequestState';
import { findAllSubjects } from 'views/subject/services/get-data';

//#endregion

const SubjectContext = createContext();

const initialState = {
    [SUBJECT_FIELDS.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const SubjectContextProvider = ({ children, defaultValues }) => {
    const modalRef = useRef(null);
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const { run } = useRequestState();
    const fetchSubjects = useCallback((page, order, direction) => run(() => findAllSubjects(page, order, direction)), [
        run
    ]);

    const show = useCallback(() => modalRef.current && modalRef.current.show(), [modalRef]);
    const hide = useCallback(() => modalRef.current && modalRef.current.hide(), [modalRef]);

    const setLoading = useCallback(() => {
        setState((prevState) => ({
            ...prevState,
            loading: !prevState.loading
        }));
    }, [setState]);

    const setSelected = useCallback(
        (id) =>
            setState((prevState) => {
                const selected = id ? prevState[SUBJECT_FIELDS.THIS].find((ctg) => ctg.id === id) : {};

                return {
                    ...prevState,
                    selected,
                    hasSelected: isPresent(selected)
                };
            }),
        [setState]
    );

    const researchSubjects = useCallback(
        (page, order, direction) => {
            setLoading();

            fetchSubjects(page, order, direction).then(({ data }) => {
                data &&
                    setState((prevState) => ({
                        ...prevState,
                        [SUBJECT_FIELDS.THIS]: data.content,
                        [PAGEABLE_FIELDS.THIS]: {
                            ...data[PAGEABLE_FIELDS.THIS],
                            [PAGEABLE_FIELDS.TOTAL_PAGES]: data[PAGEABLE_FIELDS.TOTAL_PAGES]
                        }
                    }));
            });

            setLoading();
        },
        [setLoading, fetchSubjects, setState]
    );

    return (
        <SubjectContext.Provider value={{ setLoading, setSelected, researchSubjects, show, hide, modalRef, state }}>
            {children}
        </SubjectContext.Provider>
    );
};

const useSubjectContext = () => {
    const { setLoading, setSelected, researchSubjects, show, hide, modalRef, state } = useContext(SubjectContext);

    return { setLoading, setSelected, researchSubjects, show, hide, modalRef, ...state };
};

export default useSubjectContext;
