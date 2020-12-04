//#region Imports

import SUBJECT_FIELDS from 'utils/constants/field/subject';
import SUBJECT_LABELS from 'utils/constants/label/subject';
import yup from 'utils/validations/yup';

//#endregion

const subjectSchema = yup.object().shape({
    [SUBJECT_FIELDS.NAME]: yup.string().required().max(200).label(SUBJECT_LABELS.NAME)
});

export default subjectSchema;
