//#region Imports

import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import useSystemContext from 'storage/system/context';
import verifyRoute from 'utils/functions/verifyRoute';
import ROUTE_NAME from 'routes/route-name';

//#endregion

const useCheckCredentials = () => {
    const history = useHistory();
    const { user } = useSystemContext();

    const canEnter = useCallback(() => {
        const isntSystemRoute = verifyRoute();
        if (isntSystemRoute || (!isntSystemRoute && user)) {
            return true;
        }

        history.push(ROUTE_NAME.OUT.ERROR);
        return false;
    }, [user, history]);

    return { canEnter };
};

export default useCheckCredentials;
