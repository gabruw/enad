//#region Imports

import React, { useMemo } from 'react';
import { Controller } from 'react-hook-form';
import styles from './styles.module.css';

import '../../assets/css/fonts.css';

//#endregion

const FieldWrapper = ({ as, name, errors, label, className, ...rest }) => {
    const error = useMemo(() => errors && errors[name], [errors, name]);

    return (
        <div className={styles.content}>
            <div className={styles.input}>
                <Controller
                    as={as}
                    name={name}
                    defaultValue=''
                    variant='outlined'
                    error={Boolean(error)}
                    style={{ display: 'flex' }}
                    className={styles.controller}
                    label={<div className={styles.label}>{label}</div>}
                    {...rest}
                />
            </div>

            {error && <div className={styles.error}>{error.message}</div>}
        </div>
    );
};

export default FieldWrapper;
