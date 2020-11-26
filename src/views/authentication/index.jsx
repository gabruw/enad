//#region Imports

import ScreenLoader from 'components/ScreenLoader';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import { Segment } from 'semantic-ui-react';
import useSystemContext from 'storage/system/context';
import AUTHENTICATION_FIELDS from 'utils/constants/field/authentication';
import USER_FIELDS from 'utils/constants/field/user';
import secureStorage from 'utils/functions/secureStorage';
import useRequestState from 'utils/hooks/useRequestState';
import Login from './login';
import { refresh } from './services/get-data';
import styles from './styles.module.css';

//#endregion

const Authentication = () => {
    const history = useHistory();
    const [canRefresh, setCanRefresh] = useState(true);
    const { user, addUser, removeUser } = useSystemContext();

    const { run, requestState } = useRequestState();
    const fetchToken = useCallback(() => run(async () => await refresh()), [run]);

    useEffect(() => {
        if (canRefresh) {
            const localUser = secureStorage.getItem([USER_FIELDS.THIS]);
            if (localUser) {
                fetchToken()
                    .then(({ data }) => {
                        addUser({ ...user, [AUTHENTICATION_FIELDS.TOKEN]: data[AUTHENTICATION_FIELDS.TOKEN] });
                        history.push(ROUTE_NAME.IN.HOME);
                    })
                    .catch(() => removeUser());
            }
        }
    }, [canRefresh, fetchToken, addUser, user, history, removeUser]);

    return (
        <div className={styles.content}>
            <ScreenLoader isLoading={requestState.isLoading} />

            <Segment className={styles.segment}>
                <Login setCanRefresh={setCanRefresh} />
            </Segment>
        </div>
    );
};

export default Authentication;
