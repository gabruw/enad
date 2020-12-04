//#region Imports

import moment from 'moment';
import AUTHENTICATION_FIELDS from 'utils/constants/field/authentication';
import USER_FIELDS from 'utils/constants/field/user';

//#endregion

export const formatLogin = (data) => ({
    [AUTHENTICATION_FIELDS.EMAIL]: data[AUTHENTICATION_FIELDS.THIS][AUTHENTICATION_FIELDS.EMAIL],
    [AUTHENTICATION_FIELDS.PASSWORD]: data[AUTHENTICATION_FIELDS.THIS][AUTHENTICATION_FIELDS.PASSWORD]
});

export const formatRegister = (data, picture) => ({
    [USER_FIELDS.THIS]: {
        picture,
        [USER_FIELDS.CPF]: data[USER_FIELDS.CPF],
        [USER_FIELDS.NAME]: data[USER_FIELDS.NAME],
        [USER_FIELDS.BIRTH]: moment(data[USER_FIELDS.BIRTH]).format('yyyy-MM-DD')
    },
    [AUTHENTICATION_FIELDS.THIS]: {
        [AUTHENTICATION_FIELDS.EMAIL]: data[AUTHENTICATION_FIELDS.EMAIL],
        [AUTHENTICATION_FIELDS.PASSWORD]: data[AUTHENTICATION_FIELDS.PASSWORD]
    }
});
