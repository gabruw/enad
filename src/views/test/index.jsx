//#region Imports

import ContextBox from 'components/ContextBox';
import DataList from 'components/DataList';
import React, { Fragment, useCallback, useEffect } from 'react';
import useTestContext, { TestContextProvider } from 'storage/test/context';
import FormTest from './FormTest';
import DGH_TEST from './services/data-grid';
import { removeTest } from './services/send-data';

//#endregion

const Test = () => (
    <TestContextProvider>
        <Provider />
    </TestContextProvider>
);

const Provider = () => {
    const { test, show, pageable, setSelected, loading, researchTest } = useTestContext();

    useEffect(() => {
        researchTest();
    }, [researchTest]);

    const edit = useCallback(
        (id) => {
            setSelected(id);
            show();
        },
        [setSelected, show]
    );

    return (
        <Fragment>
            <FormTest />

            <ContextBox
                icon='list'
                title='Provas'
                isLoading={loading}
                onClick={() => show()}
                buttonText='Adicionar prova'
                fetch={() => researchTest()}
            >
                <DataList
                    edit={edit}
                    data={test}
                    headers={DGH_TEST}
                    isLoading={loading}
                    pageable={pageable}
                    remove={removeTest}
                    fetch={researchTest}
                />
            </ContextBox>
        </Fragment>
    );
};

export default Test;
