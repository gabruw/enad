//#region Imports
import yup from 'utils/validations/yup'
import AUTHENTICATION_FIELDS from 'utils/constants/field/authentication';
import USER_FIELDS from 'utils/constants/field/user';
import AUTHENTICATION_LABELS from 'utils/constants/label/authentication';
import USER_LABELS from 'utils/constants/field/user';

//#endregion

const registrationSchema = yup.object().shape({
    [AUTHENTICATION_FIELDS.EMAIL]: yup.string().email().required().max(255).label(AUTHENTICATION_LABELS.EMAIL),
    [AUTHENTICATION_FIELDS.PASSWORD]: yup.string().required().max(255).label(AUTHENTICATION_LABELS.PASSWORD),
    [USER_FIELDS.NAME]: yup.string().required().max(255).label(USER_LABELS.NAME),
    [USER_FIELDS.CPF]: yup.string().required().max(255).label(USER_LABELS.CPF),
    [USER_FIELDS.BIRTH]: yup.string().required().max(255).label(USER_LABELS.BIRTH),
});

export default registrationSchema;
