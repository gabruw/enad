//#region Imports

import API from 'api/api';
import ENDPOINT from 'api/endpoint';

//#endregion

export const refresh = () => API.get(ENDPOINT.AUTHENTICATION.REFRESH);

export const login = (data) => API.post(ENDPOINT.AUTHENTICATION.LOGIN, data);
