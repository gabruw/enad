//#region Imports

import moment from 'moment';
import AUTHENTICATION_FIELDS from 'utils/constants/field/authentication';
import USER_FIELDS from 'utils/constants/field/user';
import USER_LABELS from 'utils/constants/label/user';
import AUTHENTICATION_LABELS from 'utils/constants/label/authentication';
import yup from 'utils/validations/yup';
import { emptyStringToUndefined } from 'utils/validations/yup';

//#endregion

const registrationSchema = yup.object().shape({
    // [USER_FIELDS.CPF]: yup.string().required().max(255).label(USER_LABELS.CPF),
    // [USER_FIELDS.NAME]: yup.string().required().max(255).label(USER_LABELS.NAME),
    [USER_FIELDS.BIRTH]: yup
        .string()
        .required()
        .transform(emptyStringToUndefined)
        .max(255)
        .test('Idade', 'A idade deve ser superior a 18 anos', (value) => {
            console.log('value', value);
            console.log('moment', moment().diff(value, 'years'));
            return moment().diff(value, 'years') < 18;
        })
        .label(USER_LABELS.BIRTH)
    // [AUTHENTICATION_FIELDS.PASSWORD]: yup.string().required().max(255).label(AUTHENTICATION_LABELS.PASSWORD),
    // [AUTHENTICATION_FIELDS.EMAIL]: yup.string().email().required().max(255).label(AUTHENTICATION_LABELS.EMAIL)
});

export default registrationSchema;
