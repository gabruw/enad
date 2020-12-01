//#region Imports

import ContextBox from 'components/ContextBox';
import DataList from 'components/DataList';
import React, { Fragment, useCallback, useEffect } from 'react';
import useUserTypeContext, { UserTypeContextProvider } from 'storage/user-type/context';
import FormCategory from './FormUserType';
import DGH_USER_TYPE from './services/data-grid';
import { removeUserType } from './services/send-data';

//#endregion

const UserType = () => (
    <UserTypeContextProvider>
        <Provider />
    </UserTypeContextProvider>
);

const Provider = () => {
    const { userType, show, pageable, setSelected, loading, researchUserType } = useUserTypeContext();

    useEffect(() => {
        researchUserType();
    }, [researchUserType]);

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
                icon='group'
                isLoading={loading}
                onClick={() => show()}
                title='Tipo de usuário'
                fetch={() => researchUserType()}
                buttonText='Adicionar tipo de usuário'
            >
                <DataList
                    edit={edit}
                    data={userType}
                    isLoading={loading}
                    pageable={pageable}
                    headers={DGH_USER_TYPE}
                    remove={removeUserType}
                    fetch={researchUserType}
                />
            </ContextBox>
        </Fragment>
    );
};

export default UserType;
