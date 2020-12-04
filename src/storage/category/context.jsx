//#region Imports

import { createContext, useCallback, useContext, useRef, useState } from 'react';
import CONTEXT_INITIAL_STATE from 'utils/constants/context-initial-state';
import CATEGORY_FIELDS from 'utils/constants/field/category';
import PAGEABLE_FIELDS from 'utils/constants/field/pageable';
import isPresent from 'utils/functions/isPresent';
import useRequestState from 'utils/hooks/useRequestState';
import { findAllCategories } from 'views/category/services/get-data';

//#endregion

const CategoryContext = createContext();

const initialState = {
    [CATEGORY_FIELDS.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const CategoryContextProvider = ({ children, defaultValues }) => {
    const modalRef = useRef(null);
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const { run } = useRequestState();
    const fetchCategories = useCallback(
        (page, order, direction) => run(() => findAllCategories(page, order, direction)),
        [run]
    );

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
                const selected = id ? prevState[CATEGORY_FIELDS.THIS].find((ctg) => ctg.id === id) : {};

                return {
                    ...prevState,
                    selected,
                    hasSelected: isPresent(selected)
                };
            }),
        [setState]
    );

    const researchCategories = useCallback(
        (page, order, direction) => {
            setLoading();

            fetchCategories(page, order, direction).then(({ data }) => {
                data &&
                    setState((prevState) => ({
                        ...prevState,
                        [CATEGORY_FIELDS.THIS]: data.content,
                        [PAGEABLE_FIELDS.THIS]: {
                            ...data[PAGEABLE_FIELDS.THIS],
                            [PAGEABLE_FIELDS.TOTAL_PAGES]: data[PAGEABLE_FIELDS.TOTAL_PAGES]
                        }
                    }));
            });

            setLoading();
        },
        [setLoading, fetchCategories, setState]
    );

    return (
        <CategoryContext.Provider value={{ setLoading, setSelected, researchCategories, show, hide, modalRef, state }}>
            {children}
        </CategoryContext.Provider>
    );
};

const useCategoryContext = () => {
    const { setLoading, setSelected, researchCategories, show, hide, modalRef, state } = useContext(CategoryContext);

    return { setLoading, setSelected, researchCategories, show, hide, modalRef, ...state };
};

export default useCategoryContext;
