import FieldWrapper from 'components/FieldWrapper';
import React, { useCallback, useEffect, useState } from 'react';
import { Form } from 'semantic-ui-react';
import QUESTION_LABELS from 'utils/constants/label/question';
import useRequestState from 'utils/hooks/useRequestState';
import { QUESTION_NAMES } from 'views/question/services/field-name';
import { findOptionsDifficulties } from 'views/question/services/get-data';

const FieldDifficulty = ({ errors }) => {
    const [options, setOptions] = useState([]);

    const { run, requestState } = useRequestState();
    const fetchDifficultiesOptions = useCallback(() => run(() => findOptionsDifficulties()), [run]);

    useEffect(() => {
        fetchDifficultiesOptions().then(({ data }) => {
            data && setOptions(data);
        });
    }, [fetchDifficultiesOptions]);

    return (
        <FieldWrapper
            required
            errors={errors}
            as={Form.Select}
            options={options}
            name={QUESTION_NAMES.LEVEL}
            label={QUESTION_LABELS.LEVEL}
            loading={requestState.isLoading}
        />
    );
};

export default FieldDifficulty;
