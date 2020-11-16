//#region Imports

import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import useSystemReducer from 'storage/system/reducer';
import verifyRoute from 'utils/functions/verifyRoute';

//#endregion

const useCheckCredentials = () => {
    const history = useHistory();
    const { authentication } = useSystemReducer();

    const canEnter = useCallback(() => {
        const isntSystemRoute = verifyRoute();
        if (isntSystemRoute || (!isntSystemRoute && authentication)) {
            return true;
        }

        history.push('/error');
        return false;
    }, [authentication, history]);

    return { canEnter };
};

export default useCheckCredentials;
