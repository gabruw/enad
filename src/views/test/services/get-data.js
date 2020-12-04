//#region Imports

import API from 'api/api';
import ENDPOINT from 'api/endpoint';

//#endregion

export const findTest = (id) => API.get(ENDPOINT.TEST.FIND(id));

export const findAllTests = (page, order, direction) => API.get(ENDPOINT.TEST.FIND_ALL(page, order, direction));
