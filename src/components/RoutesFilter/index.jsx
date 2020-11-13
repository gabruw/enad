//#region Imports

import MenuUI from 'containers/MenuUI';
import React, { useMemo } from 'react';
import verifyRoute from 'utils/constants/function/verifyRoute';
import useCheckCredentials from 'utils/hooks/useCheckCredentials';

//#endregion

const RoutesFilter = ({ children }) => {
    const { canEnter } = useCheckCredentials();
    const isntSystemRoute = useMemo(() => verifyRoute(), []);

    return isntSystemRoute ? children : canEnter() && <MenuUI>{children}</MenuUI>;
};

export default RoutesFilter;
