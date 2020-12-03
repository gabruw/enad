import FieldWrapper from 'components/FieldWrapper';
import CollapseContent from 'containers/CollapseContent';
import React, { Fragment } from 'react';
import { Form } from 'semantic-ui-react';
import ANSWER_FIELDS from 'utils/constants/field/answer';
import ANSWER_LABELS from 'utils/constants/label/answer';

const FieldsAnswer = ({ errors }) => (
    <Fragment>
        <div>
            <CollapseContent>
                {({ index }) => (
                    <FieldWrapper
                        required
                        as={Form.Input}
                        errors={errors}
                        name={`${ANSWER_FIELDS.DESCRIPTION}.${index}`}
                        label={`${ANSWER_LABELS.DESCRIPTION} ${index + 1}`}
                    />
                )}
            </CollapseContent>
        </div>
    </Fragment>
);

export default FieldsAnswer;
