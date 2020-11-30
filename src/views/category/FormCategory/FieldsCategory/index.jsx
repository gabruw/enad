//#region Imports

import FieldWrapper from 'components/FieldWrapper';
import React from 'react';
import { Form } from 'semantic-ui-react';
import CATEGORY_FIELDS from 'utils/constants/field/category';
import CATEGORY_LABELS from 'utils/constants/label/category';
import styles from './styles.module.css';

//#endregion

const FieldsCategory = ({ errors }) => (
    <div className={styles.field}>
        <FieldWrapper
            required
            as={Form.Input}
            errors={errors}
            name={CATEGORY_FIELDS.DESCRIPTION}
            label={CATEGORY_LABELS.DESCRIPTION}
        />
    </div>
);

export default FieldsCategory;
