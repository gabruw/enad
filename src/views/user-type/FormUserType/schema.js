//#region Imports

import USER_TYPE_FIELDS from 'utils/constants/field/user-type';
import USER_TYPE_LABELS from 'utils/constants/label/user-type';
import yup from 'utils/validations/yup';

//#endregion

const userTypeSchema = yup.object().shape({
    [USER_TYPE_FIELDS.NAME]: yup.string().required().max(255).label(USER_TYPE_LABELS.NAME)
});

export default userTypeSchema;
