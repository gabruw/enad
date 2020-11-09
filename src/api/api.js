//#region Imports

import axios from 'axios';
import ENDPOINT from './endpoint';

//#endregion

const API = axios.create({
    baseURL: ENDPOINT.BASE
});

export default API;
