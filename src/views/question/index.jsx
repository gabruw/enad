import ContextBox from 'components/ContextBox';
import DataList from 'components/DataList';
import React, { Fragment, useCallback, useEffect } from 'react';
import useQuestionContext, { QuestionContextProvider } from 'storage/question/context';
import FormQuestion from './FormQuestion';
import DGH_QUESTION from './services/data-grid';
import { removeQuestion } from './services/send-data';

const Question = () => (
    <QuestionContextProvider>
        <Provider />
    </QuestionContextProvider>
);

const Provider = () => {
    const { question, show, pageable, setSelected, loading, researchQuestions } = useQuestionContext();

    useEffect(() => {
        researchQuestions();
    }, [researchQuestions]);

    const edit = useCallback(
        (id) => {
            setSelected(id);
            show();
        },
        [setSelected, show]
    );

    return (
        <Fragment>
            <FormQuestion />

            <ContextBox
                icon='list'
                title='Questão'
                isLoading={loading}
                onClick={() => show()}
                buttonText='Adicionar questão'
                fetch={() => researchQuestions()}
            >
                <DataList
                    edit={edit}
                    data={question}
                    isLoading={loading}
                    pageable={pageable}
                    headers={DGH_QUESTION}
                    remove={removeQuestion}
                    fetch={researchQuestions}
                />
            </ContextBox>
        </Fragment>
    );
};

export default Question;
