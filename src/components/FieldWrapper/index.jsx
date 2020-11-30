//#region Imports

import 'assets/css/fonts.css';
import React, { useMemo } from 'react';
import { Controller } from 'react-hook-form';
import styles from './styles.module.css';
import InputMask from 'react-input-mask';

//#endregion

const FieldWrapper = ({
    mask,
    name,
    label,
    errors,
    register,
    className,
    as: Component,
    defaultValue = '',
    ...rest
}) => {
    const error = useMemo(() => errors && errors[name], [errors, name]);

    return (
        <div className={styles.content}>
            <div className={styles.input}>
                <Controller
                    name={name}
                    defaultValue={defaultValue}
                    render={(ctlrProps) => (
                        <InputMask mask={mask} {...ctlrProps}>
                            {() => (
                                <Component
                                    {...ctlrProps}
                                    {...rest}
                                    ref={register}
                                    variant='outlined'
                                    error={Boolean(error)}
                                    style={{ display: 'flex' }}
                                    className={styles.controller}
                                    label={<div className={styles.label}>{label}</div>}
                                />
                            )}
                        </InputMask>
                    )}
                />
            </div>

            {error && <div className={styles.error}>{error.message}</div>}
        </div>
    );
};

export default FieldWrapper;
