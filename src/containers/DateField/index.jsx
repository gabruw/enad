//#region Imports

import React, { Fragment, useCallback, useState } from 'react';
import { DateInput } from 'semantic-ui-calendar-react';
import { Icon } from 'semantic-ui-react';

//#endregion

const DateField = ({ errors, label, className, setValue, name, ...rest }) => {
    const [date, setDate] = useState('');

    const handleChange = useCallback(
        (value) => {
            setDate(value);
            setValue(name, value);
        },
        [setDate, name, setValue]
    );

    return (
        <Fragment>
            <input type='hidden' name={name} {...rest} />
            <DateInput
                closable
                clearable
                value={date}
                label={label}
                duration={200}
                errors={errors}
                animation='scale'
                hideMobileKeyboard
                autoComplete='off'
                iconPosition='left'
                className={className}
                dateFormat='DD/MM/yyyy'
                preserveViewMode={false}
                popupPosition='bottom right'
                clearIcon={<Icon name='remove' color='red' />}
                onChange={(_, { value }) => handleChange(value)}
            />
        </Fragment>
    );
};

export default DateField;
