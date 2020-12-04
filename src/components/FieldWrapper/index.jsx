//#region Imports

import React, { useMemo } from 'react';
import { Controller } from 'react-hook-form';
import GenericField from './GenericField';
import MaskField from './MaskField';
import styles from './styles.module.css';

//#endregion

const FieldWrapper = ({ as, mask, name, label, errors, register, required, defaultValue = '', ...rest }) => {
    const error = useMemo(() => errors && errors[name], [errors, name]);

    return (
        <div className={styles.content}>
            <div className={styles.input}>
                <Controller
                    name={name}
                    defaultValue={defaultValue}
                    render={(ctlrProps) =>
                        mask ? (
                            <MaskField
                                as={as}
                                erro={error}
                                label={label}
                                register={register}
                                required={required}
                                ctlrProps={ctlrProps}
                                {...rest}
                            />
                        ) : (
                            <GenericField
                                as={as}
                                erro={error}
                                label={label}
                                register={register}
                                required={required}
                                ctlrProps={ctlrProps}
                                {...rest}
                            />
                        )
                    }
                />
            </div>

            {error && <div className={styles.error}>{error.message}</div>}
        </div>
    );
};

export default FieldWrapper;
