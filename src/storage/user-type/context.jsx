//#region Imports

import { createContext, useCallback, useContext, useRef, useState } from 'react';
import CONTEXT_INITIAL_STATE from 'utils/constants/context-initial-state';
import PAGEABLE_FIELDS from 'utils/constants/field/pageable';
import USER_TYPE_FIELDS from 'utils/constants/field/user-type';
import isPresent from 'utils/functions/isPresent';
import useRequestState from 'utils/hooks/useRequestState';
import { findAllUserType } from 'views/user-type/services/get-data';

//#endregion

const UserTypeContext = createContext();

const initialState = {
    [USER_TYPE_FIELDS.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const UserTypeContextProvider = ({ children, defaultValues }) => {
    const modalRef = useRef(null);
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const { run } = useRequestState();
    const fetchUserType = useCallback((page, order, direction) => run(() => findAllUserType(page, order, direction)), [
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
                const selected = id ? prevState[USER_TYPE_FIELDS.THIS].find((ut) => ut.id === id) : {};

                return {
                    ...prevState,
                    selected,
                    hasSelected: isPresent(selected)
                };
            }),
        [setState]
    );

    const researchUserType = useCallback(
        (page, order, direction) => {
            setLoading();

            fetchUserType(page, order, direction).then(({ data }) => {
                data &&
                    setState((prevState) => ({
                        ...prevState,
                        [USER_TYPE_FIELDS.THIS]: data.content,
                        [PAGEABLE_FIELDS.THIS]: {
                            ...data[PAGEABLE_FIELDS.THIS],
                            [PAGEABLE_FIELDS.TOTAL_PAGES]: data[PAGEABLE_FIELDS.TOTAL_PAGES]
                        }
                    }));
            });

            setLoading();
        },
        [setLoading, fetchUserType, setState]
    );

    return (
        <UserTypeContext.Provider value={{ setLoading, setSelected, researchUserType, show, hide, modalRef, state }}>
            {children}
        </UserTypeContext.Provider>
    );
};

const useUserTypeContext = () => {
    const { setLoading, setSelected, researchUserType, show, hide, modalRef, state } = useContext(UserTypeContext);

    return { setLoading, setSelected, researchUserType, show, hide, modalRef, ...state };
};

export default useUserTypeContext;
