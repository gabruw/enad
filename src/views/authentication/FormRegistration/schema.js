//#region Imports

import moment from 'moment';
import AUTHENTICATION_FIELDS from 'utils/constants/field/authentication';
import USER_FIELDS from 'utils/constants/field/user';
import AUTHENTICATION_LABELS from 'utils/constants/label/authentication';
import USER_LABELS from 'utils/constants/label/user';
import yup from 'utils/validations/yup';

//#endregion

const registrationSchema = yup.object().shape({
    [USER_FIELDS.NAME]: yup.string().required().max(255).label(USER_LABELS.NAME),
    [USER_FIELDS.CPF]: yup.string().required().min(14).max(14).label(USER_LABELS.CPF),
    [AUTHENTICATION_FIELDS.PASSWORD]: yup.string().required().min(6).max(40).label(AUTHENTICATION_LABELS.PASSWORD),
    [AUTHENTICATION_FIELDS.EMAIL]: yup.string().email().required().min(6).max(80).label(AUTHENTICATION_LABELS.EMAIL),
    [USER_FIELDS.BIRTH]: yup
        .string()
        .required()
        .max(10)
        .test('Idade', 'A idade deve ser superior a 18 anos', (value) => moment(value, 'DD/MM/YYYY').fromNow())
        .label(USER_LABELS.BIRTH)
});

export default registrationSchema;
