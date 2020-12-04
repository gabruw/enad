//#region Imports

import { createContext, useCallback, useContext, useState } from 'react';
import USER_FIELDS from 'utils/constants/field/user';
import secureStorage from 'utils/functions/secureStorage';
import ERROR_FIELDS from 'utils/constants/field/error';

//#endregion

const SystemContext = createContext();

const initialState = {
    [USER_FIELDS.THIS]: null,
    [ERROR_FIELDS.THIS]: 404
};

export const SystemContextProvider = ({ children, defaultValues = {} }) => {
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const addUser = useCallback(
        (user) => {
            secureStorage.setItem([USER_FIELDS.THIS], user);

            setState((prevState) => ({
                ...prevState,
                user
            }));
        },
        [setState]
    );

    const removeUser = useCallback(() => {
        secureStorage.removeItem([USER_FIELDS.THIS]);

        setState((prevState) => ({
            ...prevState,
            [USER_FIELDS.THIS]: initialState[USER_FIELDS.THIS]
        }));
    }, [setState]);

    const setRequestError = useCallback(
        (error = 404) =>
            setState((prevState) => ({
                ...prevState,
                [ERROR_FIELDS.THIS]: error
            })),
        [setState]
    );

    return (
        <SystemContext.Provider value={{ addUser, removeUser, setRequestError, state }}>
            {children}
        </SystemContext.Provider>
    );
};

const useSystemContext = () => {
    const { addUser, removeUser, setRequestError, state } = useContext(SystemContext);

    return { addUser, removeUser, setRequestError, ...state };
};

export default useSystemContext;
