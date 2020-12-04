//#region Imports

import ContextBox from 'components/ContextBox';
import DataList from 'components/DataList';
import React, { Fragment, useCallback, useEffect } from 'react';
import useSubjectContext, { SubjectContextProvider } from 'storage/subject/context';
import FormSubject from './FormSubject';
import DGH_SUBJECT from './services/data-grid';
import { removeSubject } from './services/send-data';

//#endregion

const Subject = () => (
    <SubjectContextProvider>
        <Provider />
    </SubjectContextProvider>
);

const Provider = () => {
    const { subject, show, pageable, setSelected, loading, researchSubjects } = useSubjectContext();

    useEffect(() => {
        researchSubjects();
    }, [researchSubjects]);

    const edit = useCallback(
        (id) => {
            setSelected(id);
            show();
        },
        [setSelected, show]
    );

    return (
        <Fragment>
            <FormSubject />

            <ContextBox
                title='Assuntos'
                isLoading={loading}
                onClick={() => show()}
                icon='sticky note outline'
                buttonText='Adicionar assunto'
                fetch={() => researchSubjects()}
            >
                <DataList
                    edit={edit}
                    data={subject}
                    isLoading={loading}
                    pageable={pageable}
                    headers={DGH_SUBJECT}
                    remove={removeSubject}
                    fetch={researchSubjects}
                />
            </ContextBox>
        </Fragment>
    );
};

export default Subject;
