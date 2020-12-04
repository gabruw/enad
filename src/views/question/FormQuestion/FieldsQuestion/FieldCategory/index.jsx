import FieldWrapper from 'components/FieldWrapper';
import React, { useCallback, useEffect, useState } from 'react';
import { Form } from 'semantic-ui-react';
import QUESTION_LABELS from 'utils/constants/label/question';
import useRequestState from 'utils/hooks/useRequestState';
import { QUESTION_NAMES } from 'views/question/services/field-name';
import { findOptionsCategory } from 'views/question/services/get-data';

const FieldCategory = ({ errors }) => {
    const [options, setOptions] = useState([]);

    const { run, requestState } = useRequestState();
    const fetchCategoryOptions = useCallback(() => run(() => findOptionsCategory()), [run]);

    useEffect(() => {
        fetchCategoryOptions().then(({ data }) => {
            data && setOptions(data);
        });
    }, [fetchCategoryOptions]);

    return (
        <FieldWrapper
            required
            errors={errors}
            as={Form.Select}
            options={options}
            loading={requestState.isLoading}
            name={QUESTION_NAMES.CATEGORIES}
            label={QUESTION_LABELS.CATEGORIES}
        />
    );
};

export default FieldCategory;
