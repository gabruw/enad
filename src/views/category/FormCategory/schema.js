//#region Imports

import CATEGORY_FIELDS from 'utils/constants/field/category';
import * as yup from 'yup';

//#endregion

const categorySchema = yup.object().shape({
    [CATEGORY_FIELDS.NAME]: yup.string().required()
});

export default categorySchema;
