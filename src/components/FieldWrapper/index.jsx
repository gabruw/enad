//#region Imports

import 'assets/css/fonts.css';
import React, { useMemo } from 'react';
import { Controller } from 'react-hook-form';
import styles from './styles.module.css';

//#endregion

const FieldWrapper = ({ as: Component, name, errors, label, className, register, defaultValue = '', ...rest }) => {
    const error = useMemo(() => errors && errors[name], [errors, name]);

    return (
        <div className={styles.content}>
            <div className={styles.input}>
                <Controller
                    name={name}
                    defaultValue={defaultValue}
                    render={(props) => (
                        <Component
                            {...props}
                            {...rest}
                            ref={register}
                            variant='outlined'
                            error={Boolean(error)}
                            style={{ display: 'flex' }}
                            className={styles.controller}
                            label={<div className={styles.label}>{label}</div>}
                        />
                    )}
                />
            </div>

            {error && <div className={styles.error}>{error.message}</div>}
        </div>
    );
};

export default FieldWrapper;
