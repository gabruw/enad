//#region Imports

import CATEGORY_FIELDS from 'utils/constants/field/category';
import * as yup from 'yup';

//#endregion

const categorySchema = yup.object().shape({
    [CATEGORY_FIELDS.DESCRIPTION]: yup.string().required().max(255)
});

export default categorySchema;
