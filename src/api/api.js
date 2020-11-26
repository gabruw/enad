//#region Imports

import axios from 'axios';
import AUTHENTICATION_FIELDS from 'utils/constants/field/authentication';
import USER_FIELDS from 'utils/constants/field/user';
import secureStorage from 'utils/functions/secureStorage';
import ENDPOINT from './endpoint';

//#endregion

const API = axios.create({
    baseURL: ENDPOINT.BASE,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS'
    }
});

API.interceptors.request.use((config) => {
    const user = secureStorage.getItem([USER_FIELDS.THIS]);

    if (user && user[AUTHENTICATION_FIELDS.TOKEN]) {
        config.headers.Authorization = `Bearer ${user[AUTHENTICATION_FIELDS.TOKEN]}`;
    }

    return config;
});

export default API;
