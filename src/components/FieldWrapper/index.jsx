//#region Imports

import React, { useMemo } from 'react';
import { Controller } from 'react-hook-form';
import './styles.modules.css';

//#endregion

const FieldWrapper = ({ as, name, errors, label, className, ...rest }) => {
    const error = useMemo(() => errors && errors[name], [errors, name]);

    return (
        <div className='content'>
            <div className='input'>
                <Controller
                    as={as}
                    name={name}
                    defaultValue=''
                    variant='outlined'
                    error={Boolean(error)}
                    className='controller'
                    label={<span className='label'>{label}</span>}
                    {...rest}
                />
            </div>

            {error && <div className='error'>{error.message}</div>}
        </div>
    );
};

export default FieldWrapper;
