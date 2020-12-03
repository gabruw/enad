//#region Imports

import FieldWrapper from 'components/FieldWrapper';
import React, { Fragment } from 'react';
import { Form } from 'semantic-ui-react';
import TEST_FIELDS from 'utils/constants/field/test';
import TEST_LABELS from 'utils/constants/label/test';

//#endregion

const FieldsTest = ({ errors }) => (
    <Fragment>
        <FieldWrapper required as={Form.Input} errors={errors} name={TEST_FIELDS.NAME} label={TEST_LABELS.NAME} />

        <FieldWrapper
            required
            as={Form.Input}
            errors={errors}
            name={TEST_FIELDS.DESCRIPTION}
            label={TEST_LABELS.DESCRIPTION}
        />
    </Fragment>
);

export default FieldsTest;
