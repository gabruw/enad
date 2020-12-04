//#region Imports

import API from 'api/api';
import ENDPOINT from 'api/endpoint';

//#endregion

export const findUserType = (id) => API.get(ENDPOINT.USER_TYPE.FIND(id));

export const findAllUserType = (page, order, direction) => API.get(ENDPOINT.USER_TYPE.FIND_ALL(page, order, direction));
