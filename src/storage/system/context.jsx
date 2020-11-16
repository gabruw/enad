//#region Imports

import { createContext, useCallback, useContext, useState } from 'react';
import LOGIN_FIELDS from 'utils/constants/field/login';
import USER_FIELDS from 'utils/constants/field/user';

//#endregion

const SystemContext = createContext();

const initialState = {
    [USER_FIELDS.THIS]: null
};

export const SystemContextProvider = ({ children }) => {
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const addUser = useCallback(
        (user) => {
            localStorage.setItem([USER_FIELDS.THIS], JSON.stringify(user));
            setState((prevState) => ({
                ...prevState,
                user
            }));
        },
        [setState]
    );

    const removeUser = useCallback(() => {
        localStorage.removeItem([USER_FIELDS.THIS]);
        setState((prevState) => ({
            ...prevState,
            [USER_FIELDS.THIS]: initialState[USER_FIELDS.THIS]
        }));
    }, [setState]);

    return <SystemContext.Provider value={{ addUser, editUser, removeUser, state }}>{children}</SystemContext.Provider>;
};

const useSystemContext = () => {
    const { addUser, editUser, removeUser, state } = useContext(SystemContext);

    return { addUser, editUser, removeUser, ...state };
};

export default useSystemContext;
