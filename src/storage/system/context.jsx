//#region Imports

import AES from 'crypto-js/aes';
import { createContext, useCallback, useContext, useState } from 'react';
import USER_FIELDS from 'utils/constants/field/user';
import KEY from 'utils/constants/key';

//#endregion

const SystemContext = createContext();

const initialState = {
    [USER_FIELDS.THIS]: null
};

export const SystemContextProvider = ({ children, defaultValues }) => {
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const addUser = useCallback(
        (user) => {
            const encrypted = AES.encrypt(user, KEY.LOCAL_STORAGE);
            localStorage.setItem([USER_FIELDS.THIS], JSON.stringify(encrypted));

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

    return <SystemContext.Provider value={{ addUser, removeUser, state }}>{children}</SystemContext.Provider>;
};

const useSystemContext = () => {
    const { addUser, removeUser, state } = useContext(SystemContext);

    return { addUser, removeUser, ...state };
};

export default useSystemContext;
