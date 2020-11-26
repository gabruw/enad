//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import FieldWrapper from 'components/FieldWrapper';
import MessageBox from 'components/MessageBox';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Form } from 'semantic-ui-react';
import useCategoryContext from 'storage/category/context';
import CATEGORY_FIELDS from 'utils/constants/field/category';
import CATEGORY_LABELS from 'utils/constants/label/category';
import editMerge from 'utils/functions/editMerge';
import isPresent from 'utils/functions/isPresent';
import useRequestState from 'utils/hooks/useRequestState';
import { editCategory, includeCategory } from '../services/send-data';
import categorySchema from './schema';
import styles from './styles.module.css';

//#endregion

const FormCategory = () => {
    const { selected } = useCategoryContext();

    const methods = useForm({
        defaultValues: selected,
        reValidateMode: 'onBlur',
        resolver: yupResolver(categorySchema)
    });
    const { handleSubmit, errors } = methods;

    const { run, requestState } = useRequestState();
    const onSubmit = useCallback(
        async (data) => {
            if (isPresent(selected)) {
                data = editMerge(data, selected);
                await run(() => editCategory(data));
            } else {
                await run(() => includeCategory(data));
            }
        },
        [run, selected]
    );

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.field}>
                    <FieldWrapper
                        as={Form.Input}
                        errors={errors}
                        name={CATEGORY_FIELDS.DESCRIPTION}
                        label={CATEGORY_LABELS.DESCRIPTION}
                    />
                </div>

                <MessageBox list={requestState.error} error />
            </form>
        </FormProvider>
    );
};

export default FormCategory;
