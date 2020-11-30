//#region Imports

import FieldWrapper from 'components/FieldWrapper';
import DateField from 'containers/DateField';
import React, { Fragment } from 'react';
import { Form } from 'semantic-ui-react';
import AUTHENTICATION_FIELDS from 'utils/constants/field/authentication';
import USER_FIELDS from 'utils/constants/field/user';
import AUTHENTICATION_LABELS from 'utils/constants/label/authentication';
import USER_LABELS from 'utils/constants/label/user';
import AUTHENTICATION_PLACEHOLDERS from 'utils/constants/placeholder/authentication';
import USER_PLACEHOLDERS from 'utils/constants/placeholder/user';
import styles from './styles.module.css';

//#endregion

const FieldsRegistration = ({ setValue, errors }) => (
    <Fragment>
        <div className={styles.field}>
            <FieldWrapper
                required
                as={Form.Input}
                errors={errors}
                name={USER_FIELDS.NAME}
                label={USER_LABELS.NAME}
                placeholder={USER_PLACEHOLDERS.NAME}
            />
        </div>

        <div className={styles.row}>
            <div className={styles.halfField}>
                <FieldWrapper
                    required
                    as={Form.Input}
                    errors={errors}
                    mask='999.999.999-99'
                    name={USER_FIELDS.CPF}
                    label={USER_LABELS.CPF}
                    placeholder={USER_PLACEHOLDERS.CPF}
                />
            </div>

            <div className={styles.halfField}>
                <FieldWrapper
                    required
                    as={DateField}
                    errors={errors}
                    setValue={setValue}
                    name={USER_FIELDS.BIRTH}
                    label={USER_LABELS.BIRTH}
                />
            </div>
        </div>

        <div className={styles.field}>
            <FieldWrapper
                required
                as={Form.Input}
                errors={errors}
                name={AUTHENTICATION_FIELDS.EMAIL}
                label={AUTHENTICATION_LABELS.EMAIL}
                placeholder={AUTHENTICATION_PLACEHOLDERS.EMAIL}
            />
        </div>

        <div className={styles.field}>
            <FieldWrapper
                required
                type='password'
                as={Form.Input}
                errors={errors}
                className={styles.field}
                name={AUTHENTICATION_FIELDS.PASSWORD}
                label={AUTHENTICATION_LABELS.PASSWORD}
            />
        </div>
    </Fragment>
);

export default FieldsRegistration;
