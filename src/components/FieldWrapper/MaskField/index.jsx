//#region Imports

import React from 'react';
import InputMask from 'react-input-mask';
import GenericField from './../GenericField';

//#endregion

const MaskField = ({ as, mask, label, error, register, required, ctlrProps, ...rest }) => (
    <InputMask mask={mask} {...ctlrProps}>
        {() => (
            <GenericField
                as={as}
                label={label}
                error={error}
                register={register}
                required={required}
                ctlrProps={ctlrProps}
                {...rest}
            />
        )}
    </InputMask>
);

export default MaskField;
