//#region Imports

import axios from 'axios';
import ENDPOINT from './endpoint';

//#endregion

const API = axios.create({
    baseURL: ENDPOINT.BASE,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=UTF-8'
    }
});

export default API;
