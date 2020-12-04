//#region Imports

import { createContext, useCallback, useContext, useRef, useState } from 'react';
import CONTEXT_INITIAL_STATE from 'utils/constants/context-initial-state';
import TEST_FIELDS from 'utils/constants/field/category';
import PAGEABLE_FIELDS from 'utils/constants/field/pageable';
import isPresent from 'utils/functions/isPresent';
import useRequestState from 'utils/hooks/useRequestState';
import { findAllTests } from 'views/test/services/get-data';

//#endregion

const TestContext = createContext();

const initialState = {
    [TEST_FIELDS.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const TestContextProvider = ({ children, defaultValues }) => {
    const modalRef = useRef(null);
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const { run } = useRequestState();
    const fetchTests = useCallback((page, order, direction) => run(() => findAllTests(page, order, direction)), [run]);

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
                const selected = id ? prevState[TEST_FIELDS.THIS].find((ctg) => ctg.id === id) : {};

                return {
                    ...prevState,
                    selected,
                    hasSelected: isPresent(selected)
                };
            }),
        [setState]
    );

    const researchTests = useCallback(
        (page, order, direction) => {
            setLoading();

            fetchTests(page, order, direction).then(({ data }) => {
                data &&
                    setState((prevState) => ({
                        ...prevState,
                        [TEST_FIELDS.THIS]: data.content,
                        [PAGEABLE_FIELDS.THIS]: {
                            ...data[PAGEABLE_FIELDS.THIS],
                            [PAGEABLE_FIELDS.TOTAL_PAGES]: data[PAGEABLE_FIELDS.TOTAL_PAGES]
                        }
                    }));
            });

            setLoading();
        },
        [setLoading, fetchTests, setState]
    );

    return (
        <TestContext.Provider value={{ setLoading, setSelected, researchTests, show, hide, modalRef, state }}>
            {children}
        </TestContext.Provider>
    );
};

const useTestContext = () => {
    const { setLoading, setSelected, researchTests, show, hide, modalRef, state } = useContext(TestContext);

    return { setLoading, setSelected, researchTests, show, hide, modalRef, ...state };
};

export default useTestContext;
