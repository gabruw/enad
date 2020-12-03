//#region Imports

import API from 'api/api';
import ENDPOINT from 'api/endpoint';

//#endregion

export const findSubject = (id) => API.get(ENDPOINT.SUBJECT.FIND(id));

export const findAllSubjects = (page, order, direction) => API.get(ENDPOINT.SUBJECT.FIND_ALL(page, order, direction));
