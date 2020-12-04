//#region Imports

import { createContext, useCallback, useContext, useRef, useState } from 'react';
import CONTEXT_INITIAL_STATE from 'utils/constants/context-initial-state';
import QUESTION_FIELDS from 'utils/constants/field/question';
import PAGEABLE_FIELDS from 'utils/constants/field/pageable';
import isPresent from 'utils/functions/isPresent';
import useRequestState from 'utils/hooks/useRequestState';
import { findAllQuestions } from 'views/question/services/get-data';

//#endregion

const QuestionContext = createContext();

const initialState = {
    [QUESTION_FIELDS.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const QuestionContextProvider = ({ children, defaultValues }) => {
    const modalRef = useRef(null);
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const { run } = useRequestState();
    const fetchQuestion = useCallback((page, order, direction) => run(() => findAllQuestions(page, order, direction)), [
        run
    ]);

    const show = useCallback(() => modalRef.current && modalRef.current.show(), [modalRef]);
    const hide = useCallback(() => modalRef.current && modalRef.current.hide(), [modalRef]);

    const setLoading = useCallback(() => {
        setState((prevState) => ({
            ...prevState,
            loading: !prevState.loading
        }));
    }, [setState]);

    const setSelected = useCallback(
        (id) =>
            setState((prevState) => {
                const selected = id ? prevState[QUESTION_FIELDS.THIS].find((ctg) => ctg.id === id) : {};

                return {
                    ...prevState,
                    selected,
                    hasSelected: isPresent(selected)
                };
            }),
        [setState]
    );

    const researchQuestions = useCallback(
        (page, order, direction) => {
            setLoading();

            fetchQuestion(page, order, direction).then(({ data }) => {
                data &&
                    setState((prevState) => ({
                        ...prevState,
                        [QUESTION_FIELDS.THIS]: data.content,
                        [PAGEABLE_FIELDS.THIS]: {
                            ...data[PAGEABLE_FIELDS.THIS],
                            [PAGEABLE_FIELDS.TOTAL_PAGES]: data[PAGEABLE_FIELDS.TOTAL_PAGES]
                        }
                    }));
            });

            setLoading();
        },
        [setLoading, fetchQuestion, setState]
    );

    return (
        <QuestionContext.Provider value={{ setLoading, setSelected, researchQuestions, show, hide, modalRef, state }}>
            {children}
        </QuestionContext.Provider>
    );
};

const useQuestionContext = () => {
    const { setLoading, setSelected, researchQuestions, show, hide, modalRef, state } = useContext(QuestionContext);

    return { setLoading, setSelected, researchQuestions, show, hide, modalRef, ...state };
};

export default useQuestionContext;
