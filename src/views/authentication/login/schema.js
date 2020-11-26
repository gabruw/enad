//#region Imports

import AUTHENTICATION_FIELDS from 'utils/constants/field/authentication';
import * as yup from 'yup';

//#endregion

const loginSchema = yup.object().shape({
    [AUTHENTICATION_FIELDS.PASSWORD]: yup.string().required().max(255),
    [AUTHENTICATION_FIELDS.EMAIL]: yup.string().email().required().max(255)
});

export default loginSchema;
