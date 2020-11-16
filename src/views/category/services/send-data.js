//#region Imports

import API from 'api/api';
import ENDPOINT from 'api/endpoint';

//#endregion

export const includeCategory = (data) => API.post(ENDPOINT.CATEGORY.INCLUDE, data);
