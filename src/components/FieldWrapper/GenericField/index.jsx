//#region Imports

import 'assets/css/fonts.css';
import React from 'react';
import styles from '../styles.module.css';

//#endregion

const GenericField = ({ label, error, register, required, ctlrProps, as: Component, ...rest }) => (
    <Component
        {...ctlrProps}
        {...rest}
        ref={register}
        variant='outlined'
        error={Boolean(error)}
        style={{ display: 'flex' }}
        className={styles.controller}
        label={
            <div className={styles.label}>
                {label} {required && <div className={styles.required}>*</div>}
            </div>
        }
    />
);

export default GenericField;
