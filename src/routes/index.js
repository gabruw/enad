//#region Imports

import ROUTE_NAME from './name';

//#endregion

const ROUTES = [
    {
        path: '/',
        exact: true,
        component: require('../views/home').default
    },
    {
        exact: true,
        path: ROUTE_NAME.AUTHENTICATION,
        component: require('../views/authentication').default
    },
    {
        exact: true,
        path: ROUTE_NAME.HOME,
        component: require('../views/authentication').default
    },
    {
        path: '*',
        exact: true,
        component: require('../views/error').default
    }
];

export default ROUTES;
