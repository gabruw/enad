//#region Imports

import React, { useCallback, useEffect } from 'react';
import useHistory from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import USER_FIELDS from 'utils/constants/field/user';
import useSecureStorage from 'utils/hooks/useLocalStorage';
import useRequestState from 'utils/hooks/useRequestState';
import { refresh } from './services/get-data';
import useSystemContext from 'storage/system/context';
import AUTHENTICATION_FIELDS from 'utils/constants/field/authentication';

//#endregion

const Authentication = () => {
    const history = useHistory();
    const storage = useSecureStorage();
    const { user, addUser } = useSystemContext();

    const { run, requestState } = useRequestState();
    const fetchToken = useCallback((data) => run(async () => await refresh(data)), [run]);

    useEffect(() => {
        const localUser = storage.getItem([USER_FIELDS.THIS]);
        if (localUser) {
            fetchToken(localUser)
                .then(({ data }) => {
                    addUser({ ...user, [AUTHENTICATION_FIELDS.TOKEN]: data[AUTHENTICATION_FIELDS.TOKEN] });
                    history.push(ROUTE_NAME.IN.HOME);
                })
                .catch(() => storage.removeItem([USER_FIELDS.THIS]));
        }
    }, [fetchToken, storage, history]);

    return <></>;
};

export default Authentication;
