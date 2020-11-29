//#region Imports

import API from 'api/api';
import ENDPOINT from 'api/endpoint';

//#endregion

export const includeUser = (data) => API.post(ENDPOINT.USER.INCLUDE, data);
