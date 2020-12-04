//#region Imports

import TEST_FIELDS from 'utils/constants/field/test';
import TEST_LABELS from 'utils/constants/label/test';
import yup from 'utils/validations/yup';

//#endregion

const testSchema = yup.object().shape({
    [TEST_FIELDS.NAME]: yup.string().required().max(255).label(TEST_LABELS.DESCRIPTION),
    [TEST_FIELDS.DESCRIPTION]: yup.string().required().max(255).label(TEST_LABELS.DESCRIPTION)
});

export default testSchema;
