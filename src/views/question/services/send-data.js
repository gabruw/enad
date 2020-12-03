import API from 'api/api';
import ENDPOINT from 'api/endpoint';

export const includeQuestion = (data) => API.post(ENDPOINT.QUESTION.INCLUDE, data);
