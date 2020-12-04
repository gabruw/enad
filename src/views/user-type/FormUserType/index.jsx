//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import MessageBox from 'components/MessageBox';
import ModalCrudUI from 'containers/ModalCrudUI';
import React, { useCallback, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Form } from 'semantic-ui-react';
import useUserTypeContext from 'storage/user-type/context';
import USER_TYPE_FIELDS from 'utils/constants/field/user-type';
import editMerge from 'utils/functions/editMerge';
import useRequestState from 'utils/hooks/useRequestState';
import { editUserType, includeUserType } from '../services/send-data';
import FieldsUserType from './FieldsUserType';
import userTypeSchema from './schema';

//#endregion

const FormUserType = () => {
    const { run, requestState } = useRequestState();
    const { hasSelected, selected, modalRef, hide, setSelected, researchUserType } = useUserTypeContext();

    const methods = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(userTypeSchema)
    });
    const { handleSubmit, setValue, getValues, errors } = methods;

    useEffect(() => {
        if (selected && !getValues(USER_TYPE_FIELDS.NAME)) {
            setValue(USER_TYPE_FIELDS.NAME, selected[USER_TYPE_FIELDS.NAME]);
        }
    }, [selected, getValues, setValue]);

    const onSubmit = useCallback(
        async (data) => {
            if (hasSelected) {
                data = editMerge(data, selected);
                await run(() => editUserType(data));
            } else {
                await run(() => includeUserType(data));
            }

            researchUserType();
            hide();
        },
        [hasSelected, selected, run, researchUserType, hide]
    );

    return (
        <ModalCrudUI
            ref={modalRef}
            isEdit={hasSelected}
            title='Tipo de usuário'
            onClose={() => setSelected()}
            onConfirm={handleSubmit(onSubmit)}
        >
            <FormProvider {...methods}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FieldsUserType errors={errors} />

                    <MessageBox list={requestState.errors} error />
                </Form>
            </FormProvider>
        </ModalCrudUI>
    );
};

export default FormUserType;
