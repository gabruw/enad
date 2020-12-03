import QUESTION_FIELDS from 'utils/constants/field/question';
import QUESTION_LABELS from 'utils/constants/label/question';
import ANSWER_FIELDS from 'utils/constants/field/answer';
import ANSWER_LABELS from 'utils/constants/label/answer';
import yup from 'utils/validations/yup';

const questionSchema = yup.object().shape({
    [QUESTION_FIELDS.DESCRIPTION]: yup.string().required().max(200).label(QUESTION_LABELS.DESCRIPTION),
    [QUESTION_FIELDS.CORRECT]: yup.string().required().max(1).label(QUESTION_LABELS.CORRECT),
    [QUESTION_FIELDS.LEVEL]: yup.string().required().max(6).label(QUESTION_LABELS.LEVEL),
    [ANSWER_FIELDS.DESCRIPTION]: yup.array().of(yup.string().required().max(200)).label(ANSWER_LABELS.DESCRIPTION)
});

export default questionSchema;
