//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import MessageBox from 'components/MessageBox';
import ModalCrudUI from 'containers/ModalCrudUI';
import React, { useCallback, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Form } from 'semantic-ui-react';
import useSubjectContext from 'storage/subject/context';
import SUBJECT_FIELDS from 'utils/constants/field/subject';
import editMerge from 'utils/functions/editMerge';
import useRequestState from 'utils/hooks/useRequestState';
import { editSubject, includeSubject } from '../services/send-data';
import FieldsSubject from './FieldsSubject';
import subjectSchema from './schema';

//#endregion

const FormSubject = () => {
    const { run, requestState } = useRequestState();
    const { hasSelected, selected, modalRef, hide, setSelected, researchSubjects } = useSubjectContext();

    const methods = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(subjectSchema)
    });
    const { handleSubmit, setValue, getValues, errors } = methods;

    useEffect(() => {
        if (selected && !getValues(SUBJECT_FIELDS.NAME)) {
            setValue(SUBJECT_FIELDS.NAME, selected[SUBJECT_FIELDS.NAME]);
        }
    }, [selected, getValues, setValue]);

    const onSubmit = useCallback(
        async (data) => {
            if (hasSelected) {
                data = editMerge(data, selected);
                await run(() => editSubject(data));
            } else {
                await run(() => includeSubject(data));
            }

            researchSubjects();
            hide();
        },
        [hasSelected, selected, run, researchSubjects, hide]
    );

    return (
        <ModalCrudUI
            ref={modalRef}
            title='Assunto'
            isEdit={hasSelected}
            onClose={() => setSelected()}
            onConfirm={handleSubmit(onSubmit)}
        >
            <FormProvider {...methods}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FieldsSubject errors={errors} />

                    <MessageBox list={requestState.errors} error />
                </Form>
            </FormProvider>
        </ModalCrudUI>
    );
};

export default FormSubject;
