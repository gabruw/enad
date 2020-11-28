//#region Imports

import buildQueryParams from 'utils/functions/buildQueryParams';

//#endregion

const ENDPOINT = {
    BASE: 'http://localhost:8666',
    AUTHENTICATION: {
        LOGIN: '/authentication/login',
        REFRESH: '/authentication/refresh'
    },
    USER: {
        EDIT: '/user/edit',
        INCLUDE: '/user/include',
        REMOVE: (id) => `/user/remove/${id}`
    },
    CATEGORY: {
        EDIT: '/category/edit',
        INCLUDE: '/category/include',
        FIND: (id) => `/category/find/${id}`,
        REMOVE: (id) => `/category/remove/${id}`,
        FIND_ALL: (page, order, direction) => `/category/find-all?${buildQueryParams({ page, order, direction })}`
    },
    USER_TYPE: {
        EDIT: '/user-type/edit',
        INCLUDE: '/user-type/include',
        FIND: (id) => `/user-type/find/${id}`,
        REMOVE: (id) => `/user-type/remove/${id}`,
        FIND_ALL: (page, order, direction) => `/user-type/find-all?${buildQueryParams({ page, order, direction })}`
    }
};

export default ENDPOINT;
