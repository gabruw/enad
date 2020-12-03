//#region Imports

import API from 'api/api';
import ENDPOINT from 'api/endpoint';

//#endregion

export const editTest = (data) => API.put(ENDPOINT.TEST.EDIT, data);

export const removeTest = (id) => API.delete(ENDPOINT.TEST.REMOVE(id));

export const includeTest = (data) => API.post(ENDPOINT.TEST.INCLUDE, data);
