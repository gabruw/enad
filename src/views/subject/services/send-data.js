//#region Imports

import API from 'api/api';
import ENDPOINT from 'api/endpoint';

//#endregion

export const editSubject = (data) => API.put(ENDPOINT.SUBJECT.EDIT, data);

export const removeSubject = (id) => API.delete(ENDPOINT.SUBJECT.REMOVE(id));

export const includeSubject = (data) => API.post(ENDPOINT.SUBJECT.INCLUDE, data);
