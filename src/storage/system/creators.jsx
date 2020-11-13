//#region Imports

import SYSTEM_TYPES from './types';

//#endregion

const creators = (dispatch) => ({
    addUser: (user) =>
        dispatch({
            type: SYSTEM_TYPES.ADD_USER,
            payload: user
        }),
    removeUser: () =>
        dispatch({
            type: SYSTEM_TYPES.REMOVE_USER
        })
});

export default creators;
