import { yupResolver } from '@hookform/resolvers/yup';
import MessageBox from 'components/MessageBox';
import ModalCrudUI from 'containers/ModalCrudUI';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Form } from 'semantic-ui-react';
import useQuestionContext from 'storage/question/context';
import useRequestState from 'utils/hooks/useRequestState';
import { includeQuestion } from './../services/send-data';
import FieldsAnswer from './FieldsAnswer';
import FieldsQuestion from './FieldsQuestion';
import questionSchema from './schema';

const FormQuestion = () => {
    const { run, requestState } = useRequestState();
    const { hasSelected, selected, modalRef, hide, setSelected, researchQuestions } = useQuestionContext(); // contextQuestion

    const methods = useForm({
        defaultValues: selected,
        reValidateMode: 'onBlur',
        resolver: yupResolver(questionSchema),
        shouldFocusError: false
    });

    const { handleSubmit, errors } = methods;
    console.log(errors);

    const onSubmit = useCallback(
        async (data) => {
            await run(() => includeQuestion(data));

            researchQuestions();
            hide();
            console.log(data);
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
                    <FieldsAnswer errors={errors} />
                    <MessageBox list={requestState.errors} error />
                </Form>
            </FormProvider>
        </ModalCrudUI>
    );
};

export default FormQuestion;
