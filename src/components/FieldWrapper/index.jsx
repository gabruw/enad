//#region Imports

import React, { useMemo } from 'react';
import { Controller } from 'react-hook-form';
import styles from './styles.module.css';

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
                    className={styles.controller}
                    label={<span className={styles.label}>{label}</span>}
                    {...rest}
                />
            </div>

            {error && <div className={styles.error}>{error.message}</div>}
        </div>
    );
};

export default FieldWrapper;
