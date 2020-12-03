import API from 'api/api';
import ENDPOINT from 'api/endpoint';


export const editQuestion = (data) => API.put([], data);

export const removeQuestion = (data) => API.delete([]);

export const includeQuestion = (data) => API.post([], data);
