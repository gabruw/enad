import API from 'api/api';
import ENDPOINT from 'api/endpoint';

export const findQuestion = (id) => API.get(ENDPOINT.QUESTION.FIND(id));

export const findAllQuestions = (page, order, direction) => API.get(ENDPOINT.QUESTION.FIND_ALL(page, order, direction));
