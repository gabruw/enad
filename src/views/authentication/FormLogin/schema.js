//#region Imports

import AUTHENTICATION_FIELDS from 'utils/constants/field/authentication';
import AUTHENTICATION_LABELS from 'utils/constants/label/authentication';
import yup from 'utils/validations/yup';

//#endregion

const loginSchema = yup.object().shape({
    [AUTHENTICATION_FIELDS.PASSWORD]: yup.string().required().max(255).label(AUTHENTICATION_LABELS.PASSWORD),
    [AUTHENTICATION_FIELDS.EMAIL]: yup.string().email().required().max(255).label(AUTHENTICATION_LABELS.EMAIL)
});

export default loginSchema;
