//#region Imports
import AUTHENTICATION_FIELDS from 'utils/constants/field/authentication';
import USER_FIELDS from 'utils/constants/field/user';

//#endregion

const formatRegister = (data, picture) => ({
    user: {
        picture,
        [USER_FIELDS.CPF]: data[USER_FIELDS.CPF],
        [USER_FIELDS.NAME]: data[USER_FIELDS.NAME],
        [USER_FIELDS.BIRTH]: data[USER_FIELDS.BIRTH]
    },
    authentication: {
        [AUTHENTICATION_FIELDS.EMAIL]: data[AUTHENTICATION_FIELDS.EMAIL],
        [AUTHENTICATION_FIELDS.PASSWORD]: data[AUTHENTICATION_FIELDS.PASSWORD]
    }
});

export default formatRegister;
