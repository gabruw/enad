//#region Imports

import FieldWrapper from 'components/FieldWrapper';
import React from 'react';
import { Form } from 'semantic-ui-react';
import CATEGORY_FIELDS from 'utils/constants/field/category';
import CATEGORY_LABELS from 'utils/constants/label/category';

//#endregion

const FieldsCategory = ({ errors }) => (
    <FieldWrapper
        required
        as={Form.Input}
        errors={errors}
        name={CATEGORY_FIELDS.DESCRIPTION}
        label={CATEGORY_LABELS.DESCRIPTION}
    />
);

export default FieldsCategory;
