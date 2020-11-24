//#region Imports

import axios from 'axios';
import ENDPOINT from './endpoint';
import USER_FIELDS from 'utils/constants/field/user';
import AES from 'crypto-js/aes';
import KEY from 'utils/constants/key';

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
    const user = JSON.parse(localStorage.getItem([USER_FIELDS.THIS]));
    const data = AES.decrypt(user, KEY.LOCAL_STORAGE);

    if (data && data.token) {
        config.headers.Authorization = `Bearer ${data.token}`;
    }

    return config;
});

export default API;
