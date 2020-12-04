//#region Imports

import ERROR_FIELDS from 'utils/constants/field/error';

//#endregion

const PAGE_ERRORS = {
    401: {
        [ERROR_FIELDS.TITLE]: 'Não autorizado',
        [ERROR_FIELDS.DESCRIPTION]: 'O usuário não está autorizado a visualizar está página'
    },
    404: {
        [ERROR_FIELDS.TITLE]: 'Não encontrado',
        [ERROR_FIELDS.DESCRIPTION]: 'A página não foi encotnada no nosso sistema'
    }
};

export default PAGE_ERRORS;
