import FieldWrapper from 'components/FieldWrapper';
import React, { Fragment } from 'react';
import { Form } from 'semantic-ui-react';
import QUESTION_LABELS from 'utils/constants/label/question';
import { QUESTION_NAMES } from 'views/question/services/field-name';
import FieldQuestion from './index';

const FieldsQuestion = ({ errors }) => (
    <Fragment>
        <div>
            <FieldWrapper
                required
                as={Form.Input}
                errors={errors}
                name={QUESTION_NAMES.DESCRIPTION}
                label={QUESTION_LABELS.DESCRIPTION}
            />
        </div>

        <div>
            <div>
                <FieldWrapper
                    required
                    as={Form.Input}
                    errors={errors}
                    name={QUESTION_NAMES.CORRECT}
                    label={QUESTION_LABELS.CORRECT}
                />
            </div>

            <div>
                <FieldWrapper
                    required
                    as={Form.Input}
                    errors={errors}
                    name={QUESTION_NAMES.LEVEL}
                    label={QUESTION_LABELS.LEVEL}
                />
            </div>
        </div>

        <FieldQuestion />
    </Fragment>
);

export default FieldsQuestion;
