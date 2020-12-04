import FieldWrapper from 'components/FieldWrapper';
import CollapseContent from 'containers/CollapseContent';
import React from 'react';
import { Form } from 'semantic-ui-react';
import ANSWER_LABELS from 'utils/constants/label/answer';
import { ANSWER_NAMES } from 'views/question/services/field-name';

const FieldsAnswer = ({ errors }) => (
    <CollapseContent name={ANSWER_NAMES.DESCRIPTION} label={ANSWER_LABELS.DESCRIPTION}>
        {({ name, label }) => <FieldWrapper required as={Form.Input} errors={errors} name={name} label={label} />}
    </CollapseContent>
);

export default FieldsAnswer;
