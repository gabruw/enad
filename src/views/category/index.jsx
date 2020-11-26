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
    const { category, show, setSelected, loading, modalRef, researchCategories } = useCategoryContext();

    useEffect(() => {
        researchCategories();
    }, [researchCategories]);

    const edit = useCallback((id) => setSelected(id), [setSelected]);

    const remove = useCallback(
        async (id) => {
            await removeCategory(id);
            await researchCategories();
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
                research={() => researchCategories()}
            >
                <DataList headers={DGH_CATEGORY} data={category} edit={edit} remove={remove} isLoading={loading} />
            </ContextBox>
        </Fragment>
    );
};

export default Category;
