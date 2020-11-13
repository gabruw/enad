//#region Imports

import { useReducer } from 'react';
import AUTH_FIELDS from 'utils/constants/field/authentication';
import USER_FIELDS from 'utils/constants/field/user';
import creators from './creators';
import SYSTEM_TYPES from './types';

//#endregion

const initialState = {
    [USER_FIELDS.THIS]: null,
    [AUTH_FIELDS.THIS]: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case SYSTEM_TYPES.ADD_USER:
            return { user: action.payload };
        case SYSTEM_TYPES.REMOVE_USER:
            return { user: initialState.user };
        default:
            return state;
    }
};

const useSystemReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return { ...state, ...creators(dispatch) };
};

export default useSystemReducer;
