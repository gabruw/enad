//#region Imports

import ContextBox from 'components/ContextBox';
import DataList from 'components/DataList';
import ModalUI from 'containers/ModalUI';
import React, { Fragment, useCallback, useEffect } from 'react';
import useCategoryContext, { CategoryContextProvider } from 'storage/category/context';
import FormCategory from './FormCategory';
import DGH_CATEGORY from './services/data-grid';
import { removeCategory } from './services/send-data';

//#endregion

const Category = () => (
    <CategoryContextProvider>
        <Provider />
    </CategoryContextProvider>
);

const Provider = () => {
    const { category, show, pageable, setSelected, loading, modalRef, researchCategories } = useCategoryContext();

    useEffect(() => {
        researchCategories();
    }, [researchCategories]);

    const remove = useCallback(
        async (id) => {
            await removeCategory(id);
            researchCategories();
        },
        [researchCategories]
    );

    return (
        <Fragment>
            <ModalUI ref={modalRef} title='Adicionar Categoria' icon='plus'>
                <FormCategory />
            </ModalUI>

            <ContextBox
                icon='list'
                title='Categorias'
                isLoading={loading}
                onClick={() => show()}
                buttonText='Adicionar Categoria'
                fetch={() => researchCategories()}
            >
                <DataList
                    remove={remove}
                    data={category}
                    edit={setSelected}
                    isLoading={loading}
                    pageable={pageable}
                    headers={DGH_CATEGORY}
                    fetch={researchCategories}
                />
            </ContextBox>
        </Fragment>
    );
};

export default Category;
