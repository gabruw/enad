//#region Imports

import ROUTE_NAME from 'routes/route-name';

//#endregion

const verifyRoute = () => {
    const path = window.location.pathname;
    return Object.values(ROUTE_NAME.OUT).indexOf(path) !== -1;
};

export default verifyRoute;
