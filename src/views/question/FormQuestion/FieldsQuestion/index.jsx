import FieldWrapper from 'components/FieldWrapper';
import React, { Fragment } from 'react';
import { Form } from 'semantic-ui-react';
import QUESTION_FIELDS from 'utils/constants/field/question';
import QUESTION_LABELS from 'utils/constants/label/question';

const FieldsQuestion = ({ errors }) => (
    <Fragment>
        <div>
            <FieldWrapper
                required
                as={Form.Input}
                errors={errors}
                name={QUESTION_FIELDS.DESCRIPTION}
                label={QUESTION_LABELS.DESCRIPTION}
            />
        </div>
        <div>
            <div>
                <FieldWrapper
                    required
                    as={Form.Input}
                    errors={errors}
                    name={QUESTION_FIELDS.CORRECT}
                    label={QUESTION_LABELS.CORRECT}
                />
            </div>
            <div>
                <FieldWrapper
                    required
                    as={Form.Input}
                    errors={errors}
                    name={QUESTION_FIELDS.LEVEL}
                    label={QUESTION_LABELS.LEVEL}
                />
            </div>
        </div>
    </Fragment>
);

export default FieldsQuestion;
