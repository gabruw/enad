//#region Imports

import ModalUI from 'containers/ModalUI';
import React, { Fragment, useEffect } from 'react';
import useCategoryContext, { CategoryContextProvider } from 'storage/category/context';
import FormCategory from './FormCategory';

//#endregion

const Category = () => (
    <CategoryContextProvider>
        <Provider />
    </CategoryContextProvider>
);

const Provider = () => {
    const { list, show, select, loading, modalRef, researchCategories } = useCategoryContext();

    useEffect(() => {
        researchCategories();
    }, [researchCategories]);

    return (
        <Fragment>
            <ModalUI ref={modalRef} title='Adicionar Categoria' icon='plus'>
                <FormCategory />
            </ModalUI>
        </Fragment>
    );
};

export default Category;
