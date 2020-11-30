//#region Imports

import FieldWrapper from 'components/FieldWrapper';
import React, { Fragment } from 'react';
import { Form } from 'semantic-ui-react';
import AUTHENTICATION_FIELDS from 'utils/constants/field/authentication';
import AUTHENTICATION_LABELS from 'utils/constants/label/authentication';
import styles from './styles.module.css';

//#endregion

const FieldsLogin = ({ errors }) => (
    <Fragment>
        <div className={styles.field}>
            <FieldWrapper
                as={Form.Input}
                errors={errors}
                placeholder='email@email.com'
                name={AUTHENTICATION_FIELDS.EMAIL}
                label={AUTHENTICATION_LABELS.EMAIL}
            />
        </div>

        <div className={styles.field}>
            <FieldWrapper
                as={Form.Input}
                errors={errors}
                type='password'
                name={AUTHENTICATION_FIELDS.PASSWORD}
                label={AUTHENTICATION_LABELS.PASSWORD}
            />
        </div>
    </Fragment>
);

export default FieldsLogin;
