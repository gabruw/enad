//#region Imports

import ROUTE_NAME from 'routes/route-name';

//#endregion

const SIDEMENU_OPTIONS = [
    {
        text: 'Home',
        icon: 'home',
        path: ROUTE_NAME.IN.HOME
    },
    {
        text: 'Categorias',
        icon: 'list',
        path: ROUTE_NAME.IN.CATEGORY
    },
    {
        text: 'Tipos de Usuário',
        icon: 'group',
        path: ROUTE_NAME.IN.USER_TYPE
    },
    {
        text: 'Testes',
        icon: 'file alternate outline',
        path: ROUTE_NAME.IN.TEST
    }
];

export default SIDEMENU_OPTIONS;
