//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import FieldWrapper from 'components/FieldWrapper';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Input, Button } from 'semantic-ui-react';
import CATEGORY_FIELDS from 'utils/constants/field/category';
import { includeCategory } from '../services/send-data';
import categorySchema from './schema';
import useRequestState from 'utils/hooks/useRequestState';
import CATEGORY_LABELS from 'utils/constants/label/category';

//#endregion

const FormCategory = () => {
    const methods = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(categorySchema)
    });
    const { handleSubmit, errors } = methods;

    const { run, requestState } = useRequestState();
    const onSubmit = useCallback(
        async (data) => {
            await run(() => includeCategory(data));
        },
        [run]
    );

    console.log(requestState);

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FieldWrapper as={Input} name={CATEGORY_FIELDS.NAME} label={CATEGORY_LABELS.NAME} errors={errors} />

                <Button type='submit' primary>
                    Salvar
                </Button>
            </form>
        </FormProvider>
    );
};

export default FormCategory;
