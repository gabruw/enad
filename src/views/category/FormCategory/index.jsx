//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import MessageBox from 'components/MessageBox';
import ModalUI from 'containers/ModalUI';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import useCategoryContext from 'storage/category/context';
import editMerge from 'utils/functions/editMerge';
import isPresent from 'utils/functions/isPresent';
import useRequestState from 'utils/hooks/useRequestState';
import { editCategory, includeCategory } from '../services/send-data';
import FieldsCategory from './../FieldsCategory';
import categorySchema from './schema';

//#endregion

const FormCategory = () => {
    const { run, requestState } = useRequestState();
    const { selected, modalRef, setSelected, researchCategories } = useCategoryContext();
    console.log('selected', selected);
    const methods = useForm({
        defaultValues: selected,
        reValidateMode: 'onBlur',
        resolver: yupResolver(categorySchema)
    });
    const { handleSubmit, errors } = methods;

    const onSubmit = useCallback(
        async (data) => {
            if (isPresent(selected)) {
                data = editMerge(data, selected);
                await run(() => editCategory(data));
            } else {
                await run(() => includeCategory(data));
            }

            researchCategories();
        },
        [run, selected, researchCategories]
    );

    return (
        <ModalUI
            icon='plus'
            ref={modalRef}
            title='Adicionar Categoria'
            onClose={() => setSelected()}
            onConfirm={handleSubmit(onSubmit)}
        >
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FieldsCategory errors={errors} />

                    <MessageBox list={requestState.error} error />
                </form>
            </FormProvider>
        </ModalUI>
    );
};

export default FormCategory;
