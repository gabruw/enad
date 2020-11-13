//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import FieldWrapper from 'components/FieldWrapper';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Input } from 'semantic-ui-react';
import CATEGORY_FIELDS from 'utils/constants/field/category';
import categorySchema from './schema';

//#endregion

const FormCategory = () => {
    const methods = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(categorySchema)
    });
    const { handleSubmit, errors } = methods;

    const onSubmit = useCallback((data) => {
        console.log('data', data);
    }, []);

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FieldWrapper as={Input} name={CATEGORY_FIELDS.NAME} errors={errors} />

                <button type='submit'>Teste</button>
            </form>
        </FormProvider>
    );
};

export default FormCategory;
