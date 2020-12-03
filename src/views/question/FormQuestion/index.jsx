import { yupResolver } from '@hookform/resolvers/yup';
import MessageBox from 'components/MessageBox';
import ModalCrudUI from 'containers/ModalCrudUI';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Form } from 'semantic-ui-react';
import editMerge from 'utils/functions/editMerge';
import useRequestState from 'utils/hooks/useRequestState';
import FieldsQuestion from './FieldsQuestion';
import { editQuestion, includeQuestion } from './../services/send-data';
import useQuestionContext from 'storage/question/context';

const FormQuestion = () => {
    const { run, requestState } = useRequestState();
    const { hasSelected, selected, modalRef, hide, setSelected, researchQuestions } = useQuestionContext(); // contextQuestion

    const methods = useForm({
        defaultValues: selected,
        reValidateMode: 'onBlur',
        resolver: yupResolver()
    });

    const { handleSubmit, errors } = methods;

    const onSubmit = useCallback(
        async (data) => {
            if (hasSelected) {
                data = editMerge(data, selected);
                await run(() => editQuestion(data));
            } else {
                await run(() => includeQuestion(data));
            }

            researchQuestions();
            hide();
        },
        [hasSelected, selected, run, researchQuestions, hide]
    );

    return (
        <ModalCrudUI
            ref={modalRef}
            title='Questão'
            isEdit={hasSelected}
            onClose={() => setSelected()}
            onConfirm={handleSubmit(onSubmit)}
        >
            <FormProvider {...methods}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FieldsQuestion errors={errors} />
                    {/* <FieldAnswers/>   */}
                    <MessageBox list={requestState.errors} error />
                </Form>
            </FormProvider>
        </ModalCrudUI>
    );
};

export default FormQuestion;
