//#region Imports

import ContextBox from 'components/ContextBox';
import DataList from 'components/DataList';
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
    const { category, show, pageable, setSelected, loading, researchCategories } = useCategoryContext();

    useEffect(() => {
        researchCategories();
    }, [researchCategories]);

    const edit = useCallback(
        (id) => {
            setSelected(id);
            show();
        },
        [setSelected, show]
    );

    return (
        <Fragment>
            <FormCategory />

            <ContextBox
                icon='list'
                title='Categorias'
                isLoading={loading}
                onClick={() => show()}
                buttonText='Adicionar Categoria'
                fetch={() => researchCategories()}
            >
                <DataList
                    edit={edit}
                    data={category}
                    isLoading={loading}
                    pageable={pageable}
                    headers={DGH_CATEGORY}
                    remove={removeCategory}
                    fetch={researchCategories}
                />
            </ContextBox>
        </Fragment>
    );
};

export default Category;
