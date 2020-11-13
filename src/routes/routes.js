//#region Imports

import ROUTE_NAME from './route-name';

//#endregion

const ROUTES = [
    {
        path: '/',
        exact: true,
        component: require('../views/authentication').default
    },
    {
        exact: true,
        path: ROUTE_NAME.OUT.AUTHENTICATION,
        component: require('../views/authentication').default
    },
    {
        exact: true,
        path: ROUTE_NAME.OUT.HOME,
        component: require('../views/authentication').default
    },
    {
        exact: true,
        path: ROUTE_NAME.IN.HOME,
        component: require('../views/home').default
    },
    {
        exact: true,
        path: ROUTE_NAME.IN.CATEGORY,
        component: require('../views/category').default
    },
    {
        path: '*',
        exact: true,
        component: require('../views/error').default
    }
];

export default ROUTES;
