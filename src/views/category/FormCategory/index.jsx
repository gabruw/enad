//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import MessageBox from 'components/MessageBox';
import ModalCrudUI from 'containers/ModalCrudUI';
import React, { useCallback, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Form } from 'semantic-ui-react';
import useCategoryContext from 'storage/category/context';
import CATEGORY_FIELDS from 'utils/constants/field/category';
import editMerge from 'utils/functions/editMerge';
import useRequestState from 'utils/hooks/useRequestState';
import { editCategory, includeCategory } from '../services/send-data';
import FieldsCategory from './FieldsCategory';
import categorySchema from './schema';

//#endregion

const FormCategory = () => {
    const { run, requestState } = useRequestState();
    const { hasSelected, selected, modalRef, hide, setSelected, researchCategories } = useCategoryContext();

    const methods = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(categorySchema)
    });
    const { handleSubmit, setValue, getValues, errors } = methods;

    useEffect(() => {
        if (selected && !getValues(CATEGORY_FIELDS.DESCRIPTION)) {
            setValue(CATEGORY_FIELDS.DESCRIPTION, selected[CATEGORY_FIELDS.DESCRIPTION]);
        }
    }, [selected, getValues, setValue]);

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

                    <MessageBox list={requestState.errors} error />
                </Form>
            </FormProvider>
        </ModalCrudUI>
    );
};

export default FormCategory;
