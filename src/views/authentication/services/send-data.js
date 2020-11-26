//#region Imports

import API from 'api/api';
import ENDPOINT from 'api/endpoint';

//#endregion

export const login = (data) => API.post(ENDPOINT.AUTHENTICATION.LOGIN, data);
