//#region Imports

import FieldWrapper from 'components/FieldWrapper';
import React, { Fragment } from 'react';
import { Form } from 'semantic-ui-react';
import QUESTION_LABELS from 'utils/constants/label/question';
import { QUESTION_NAMES } from 'views/question/services/field-name';
import styles from '../styles.module.css';
import FieldCategory from './FieldCategory';
import FieldDifficulty from './FieldDifficulty';

//#endregion

const FieldsQuestion = ({ errors }) => (
    <Fragment>
        <div className={styles.row}>
            <div className={styles.thirdField}>
                <FieldCategory errors={errors} />
            </div>

            <div className={styles.thirdField}>
                <FieldWrapper
                    required
                    as={Form.Input}
                    errors={errors}
                    name={QUESTION_NAMES.CORRECT}
                    label={QUESTION_LABELS.CORRECT}
                />
            </div>

            <div className={styles.thirdField}>
                <FieldDifficulty errors={errors} />
            </div>
        </div>

        <div className={styles.field}>
            <FieldWrapper
                required
                as={Form.Input}
                errors={errors}
                name={QUESTION_NAMES.DESCRIPTION}
                label={QUESTION_LABELS.DESCRIPTION}
            />
        </div>
    </Fragment>
);

export default FieldsQuestion;
