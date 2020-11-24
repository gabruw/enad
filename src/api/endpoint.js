const ENDPOINT = {
    BASE: 'http://localhost:8666',
    AUTHENTICATION: {
        LOGIN: '/authentication/login'
    },
    USER: {
        EDIT: '/user/edit',
        INCLUDE: '/user/include',
        REMOVE: (id) => `/user/remove/${id}`
    },
    CATEGORY: {
        EDIT: '/category/edit',
        INCLUDE: '/category/include',
        FIND_ALL: '/category/find-all',
        FIND: (id) => `/category/find/${id}`,
        REMOVE: (id) => `/category/remove/${id}`
    },
    USER_TYPE: {
        EDIT: '/user-type/edit',
        INCLUDE: '/user-type/include',
        FIND_ALL: '/user-type/find-all',
        FIND: (id) => `/user-type/find/${id}`,
        REMOVE: (id) => `/user-type/remove/${id}`
    }
};

export default ENDPOINT;
