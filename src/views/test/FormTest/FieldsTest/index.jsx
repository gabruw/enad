//#region Imports

import FieldWrapper from 'components/FieldWrapper';
import DateField from 'containers/DateField';
import React, { Fragment } from 'react';
import TEST_FIELDS from 'utils/constants/field/test';
import TEST_LABELS from 'utils/constants/label/test';

//#endregion

const FieldsTest = ({ errors }) => (
    <Fragment>
        <FieldWrapper required as={DateField} errors={errors} name={TEST_FIELDS.DATE} label={TEST_LABELS.DATE} />
    </Fragment>
);

export default FieldsTest;
