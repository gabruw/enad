//#region Imports

import React from 'react';
import { Controller } from 'react-hook-form';
import './styles.modules.css';

//#endregion

const FieldWrapper = ({ as, name, errors, ...rest }) => {
    const error = errors && errors[name];

    return (
        <div className='fieldContainer'>
            <div className='field'>
                <Controller as={as} name={name} error={error} {...rest} />
            </div>

            {error && <div className='fieldError'>{error.message}</div>}
        </div>
    );
};

export default FieldWrapper;
