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
        text: 'Provas',
        icon: 'file alternate outline',
        path: ROUTE_NAME.IN.TEST
    },
    {
        text: 'Questões',
        icon: '',
        path: ROUTE_NAME.IN.QUESTION
    },
    {
        text: 'Assuntos',
        icon: 'sticky note outline',
        path: ROUTE_NAME.IN.SUBJECT
    }
];

export default SIDEMENU_OPTIONS;
