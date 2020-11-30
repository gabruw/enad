//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import MessageBox from 'components/MessageBox';
import ModalCrudUI from 'containers/ModalCrudUI';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Form } from 'semantic-ui-react';
import useCategoryContext from 'storage/category/context';
import editMerge from 'utils/functions/editMerge';
import useRequestState from 'utils/hooks/useRequestState';
import { editCategory, includeCategory } from '../services/send-data';
import FieldsCategory from './FieldsCategory';
import categorySchema from './schema';

//#endregion

const FormCategory = () => {
    const { run, requestState } = useRequestState();
    const { hasSelected, selected, modalRef, hide, setSelected, researchCategories } = useCategoryContext();

    console.log('selected', selected);
    const methods = useForm({
        defaultValues: selected,
        reValidateMode: 'onBlur',
        resolver: yupResolver(categorySchema)
    });
    const { handleSubmit, errors } = methods;

    const onSubmit = useCallback(
        async (data) => {
            if (hasSelected) {
                data = editMerge(data, selected);
                await run(() => editCategory(data));
            } else {
                await run(() => includeCategory(data));
            }

            researchCategories();
            hide();
        },
        [hasSelected, selected, run, researchCategories, hide]
    );

    return (
        <ModalCrudUI
            ref={modalRef}
            title='Categoria'
            isEdit={hasSelected}
            onClose={() => setSelected()}
            onConfirm={handleSubmit(onSubmit)}
        >
            <FormProvider {...methods}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FieldsCategory errors={errors} />

                    <MessageBox list={requestState.error} error />
                </Form>
            </FormProvider>
        </ModalCrudUI>
    );
};

export default FormCategory;
