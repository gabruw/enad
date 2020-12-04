//#region Imports

import CATEGORY_FIELDS from 'utils/constants/field/category';
import CATEGORY_LABELS from 'utils/constants/label/category';
import yup from 'utils/validations/yup';

//#endregion

const categorySchema = yup.object().shape({
    [CATEGORY_FIELDS.DESCRIPTION]: yup.string().required().max(255).label(CATEGORY_LABELS.DESCRIPTION)
});

export default categorySchema;
