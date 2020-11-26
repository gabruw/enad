//#region Imports

import CryptoJS from 'crypto-js';
import SecureStorage from 'secure-web-storage';
import KEY from 'utils/constants/key';

//#endregion

const secureStorage = new SecureStorage(localStorage, {
    hash: (key) => {
        key = CryptoJS.SHA256(key, KEY.LOCAL_STORAGE);

        return key.toString();
    },
    encrypt: (data) => {
        data = CryptoJS.AES.encrypt(data, KEY.LOCAL_STORAGE);
        data = data.toString();

        return data;
    },
    decrypt: (data) => {
        data = CryptoJS.AES.decrypt(data, KEY.LOCAL_STORAGE);
        data = data.toString(CryptoJS.enc.Utf8);

        return data;
    }
});

export default secureStorage;
