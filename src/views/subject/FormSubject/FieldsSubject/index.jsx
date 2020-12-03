//#region Imports

import FieldWrapper from 'components/FieldWrapper';
import React from 'react';
import { Form } from 'semantic-ui-react';
import SUBJECT_FIELDS from 'utils/constants/field/subject';
import SUBJECT_LABELS from 'utils/constants/label/subject';

//#endregion

const FieldsSubject = ({ errors }) => (
    <FieldWrapper required as={Form.Input} errors={errors} name={SUBJECT_FIELDS.NAME} label={SUBJECT_LABELS.NAME} />
);

export default FieldsSubject;
