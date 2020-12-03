//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import MessageBox from 'components/MessageBox';
import ModalCrudUI from 'containers/ModalCrudUI';
import React, { useCallback, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Form } from 'semantic-ui-react';
import useTestContext from 'storage/test/context';
import TEST_FIELDS from 'utils/constants/field/test';
import editMerge from 'utils/functions/editMerge';
import useRequestState from 'utils/hooks/useRequestState';
import { editTest, includeTest } from '../services/send-data';
import FieldsTest from './FieldsTest';
import testSchema from './schema';

//#endregion

const FormTest = () => {
    const { run, requestState } = useRequestState();
    const { hasSelected, selected, modalRef, hide, setSelected, researchTests } = useTestContext();

    const methods = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(testSchema)
    });
    const { handleSubmit, setValue, getValues, errors } = methods;

    useEffect(() => {
        if (selected && !getValues(TEST_FIELDS.NAME) && !getValues(TEST_FIELDS.DESCRIPTION)) {
            setValue(TEST_FIELDS.NAME, selected[TEST_FIELDS.NAME]);
            setValue(TEST_FIELDS.DESCRIPTION, selected[TEST_FIELDS.DESCRIPTION]);
        }
    }, [selected, getValues, setValue]);

    const onSubmit = useCallback(
        async (data) => {
            if (hasSelected) {
                data = editMerge(data, selected);
                await run(() => editTest(data));
            } else {
                await run(() => includeTest(data));
            }

            researchTests();
            hide();
        },
        [hasSelected, selected, run, researchTests, hide]
    );

    return (
        <ModalCrudUI
            ref={modalRef}
            title='Prova'
            isEdit={hasSelected}
            onClose={() => setSelected()}
            onConfirm={handleSubmit(onSubmit)}
        >
            <FormProvider {...methods}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FieldsTest errors={errors} />

                    <MessageBox list={requestState.errors} error />
                </Form>
            </FormProvider>
        </ModalCrudUI>
    );
};

export default FormTest;
