//#region Imports

import API from 'api/api';
import ENDPOINT from 'api/endpoint';

//#endregion

export const editUserType = (data) => API.put(ENDPOINT.USER_TYPE.EDIT, data);

export const removeUserType = (id) => API.delete(ENDPOINT.USER_TYPE.REMOVE(id));

export const includeUserType = (data) => API.post(ENDPOINT.USER_TYPE.INCLUDE, data);
