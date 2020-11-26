//#region Imports

import API from 'api/api';
import ENDPOINT from 'api/endpoint';

//#endregion

export const editCategory = (data) => API.put(ENDPOINT.CATEGORY.EDIT, data);

export const removeCategory = (id) => API.delete(ENDPOINT.CATEGORY.REMOVE(id));

export const includeCategory = (data) => API.post(ENDPOINT.CATEGORY.INCLUDE, data);
