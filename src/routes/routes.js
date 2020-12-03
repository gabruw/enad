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
        path: ROUTE_NAME.OUT.LOGIN,
        component: require('../views/authentication').default
    },
    {
        exact: true,
        path: ROUTE_NAME.OUT.REGISTRATION,
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
        exact: true,
        path: ROUTE_NAME.IN.USER_CONFIGURATION,
        component: require('../views/authentication').default
    },
    {
        exact: true,
        path: ROUTE_NAME.IN.USER_TYPE,
        component: require('../views/user-type').default
    },
    {
        exact: true,
        path: ROUTE_NAME.IN.TEST,
        component: require('../views/test').default
    },
    {
        path: ROUTE_NAME.IN.QUESTION,
        component: require('../views/question').default
    },
    {
        path: ROUTE_NAME.IN.SUBJECT,
        component: require('../views/subject').default
    },
    {
        path: '*',
        exact: true,
        component: require('../views/error').default
    }
];

export default ROUTES;
