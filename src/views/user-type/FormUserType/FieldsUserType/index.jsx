//#region Imports

import FieldWrapper from 'components/FieldWrapper';
import React from 'react';
import { Form } from 'semantic-ui-react';
import USER_TYPE_FIELDS from 'utils/constants/field/user-type';
import USER_TYPE_LABELS from 'utils/constants/label/user-type';

//#endregion

const FieldsUserType = ({ errors }) => (
    <FieldWrapper required as={Form.Input} errors={errors} name={USER_TYPE_FIELDS.NAME} label={USER_TYPE_LABELS.NAME} />
);

export default FieldsUserType;
