//#region Imports

import React from 'react';
import { Controller } from 'react-hook-form';
import './styles.modules.css';

//#endregion

const FieldWrapper = ({ as, name, errors, label, className, ...rest }) => {
    const error = useMemo(() => errors && errors[name], [errors, name]);

    return (
        <div className='content'>
            <div className='field'>
                <label>{label}</label>
                <Controller
                    as={as}
                    name={name}
                    label={label}
                    defaultValue=''
                    variant='outlined'
                    error={Boolean(error)}
                    className='controller'
                    {...rest}
                />
            </div>

            {error && <div className='error'>{error.message}</div>}
        </div>
    );
};

export default FieldWrapper;
