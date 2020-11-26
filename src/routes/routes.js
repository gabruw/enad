//#region Imports

import ROUTE_NAME from './route-name';

//#endregion

const ROUTES = [
    {
        path: '/',
        exact: true,
        component: require('../views/authentication/login').default
    },
    {
        exact: true,
        path: ROUTE_NAME.OUT.LOGIN,
        component: require('../views/authentication/login').default
    },
    // {
    //     exact: true,
    //     path: ROUTE_NAME.OUT.REGISTRATION,
    //     component: require('../views/authentication/registration').default
    // },
    {
        exact: true,
        path: ROUTE_NAME.OUT.HOME,
        component: require('../views/authentication/login').default
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
