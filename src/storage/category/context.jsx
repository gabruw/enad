//#region Imports

import { createContext, useCallback, useContext, useRef, useState } from 'react';
import CATEGORY_FIELDS from 'utils/constants/field/category';
import useRequestState from 'utils/hooks/useRequestState';
import { findAllCategories } from 'views/category/services/get-data';

//#endregion

const CategoryContext = createContext();

const initialState = {
    selected: {},
    loading: false,
    [CATEGORY_FIELDS.THIS]: null
};

export const CategoryContextProvider = ({ children, defaultValues }) => {
    const modalRef = useRef(null);
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const { run } = useRequestState();
    const fetchCategories = useCallback(() => run(() => findAllCategories()), [run]);

    const show = useCallback(() => modalRef.current && modalRef.current.show(), [modalRef]);
    const hide = useCallback(() => modalRef.current && modalRef.current.hide(), [modalRef]);

    const setLoading = useCallback(() => {
        setState((prevState) => ({
            ...prevState,
            loading: !prevState.loading
        }));
    }, [setState]);

    const setSelected = useCallback(
        (category = {}) => {
            setState((prevState) => ({
                ...prevState,
                selected: prevState[CATEGORY_FIELDS.THIS].find((ctg) => ctg.id === category.id)
            }));
        },
        [setState]
    );

    const researchCategories = useCallback(() => {
        setLoading();

        fetchCategories().then(({ data }) => {
            setState((prevState) => ({ ...prevState, [CATEGORY_FIELDS.THIS]: data }));
        });

        setLoading();
    }, [setLoading, fetchCategories, setState]);

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
