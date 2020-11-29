//#region Imports

import * as yup from 'yup';
import isCPFValid from './cpf';
import YUP_ERRORS from 'utils/constants/error/yup';

//#endregion

/**
 * Validações
 */
const validateIfNotEmpty = (callback) => (val) => (val ? callback(val) : true);

const cpf = (message) => yup.string().test('cpf', message || YUP_ERRORS.CPF, validateIfNotEmpty(isCPFValid));
yup.addMethod(yup.string, 'cpf', cpf);

/**
 * Conversores
 */
export const emptyStringToUndefined = (value, originalValue) => {
    if ((typeof originalValue === 'string' && originalValue === '') || originalValue === null) {
        return undefined;
    }

    return value;
};

/**
 * Tradução
 */
yup.setLocale({
    mixed: {
        default: '${path} é inválido',
        required: '${path} é um campo obrigatório',
        oneOf: '${path} deve ser um dos seguintes valores: ${values}',
        notOneOf: '${path} não pode ser um dos seguintes valores: ${values}'
    },
    string: {
        lowercase: '${path} deve estar em maiúsculo',
        uppercase: '${path} deve estar em minúsculo',
        url: '${path} deve ter um formato de URL válida',
        email: '${path} tem o formato de e-mail inválido',
        max: '${path} deve ter no máximo ${max} caracteres',
        min: '${path} deve ter pelo menos ${min} caracteres',
        length: '${path} deve ter exatamente ${length} caracteres',
        trim: '${path} não deve conter espaços no início ou no fim.'
    },
    number: {
        min: '${path} deve ser no mínimo ${min}',
        max: '${path} deve ser no máximo ${max}',
        integer: '${path} deve ser um número inteiro',
        lessThan: '${path} deve ser menor que ${less}',
        moreThan: '${path} deve ser maior que ${more}',
        positive: '${path} deve ser um número positivo',
        negative: '${path} deve ser um número negativo',
        notEqual: '${path} não pode ser igual à ${notEqual}'
    },
    date: {
        min: '${path} deve ser maior que a data ${min}',
        max: '${path} deve ser menor que a data ${max}'
    },
    array: {
        min: '${path} deve ter no mínimo ${min} itens',
        max: '${path} deve ter no máximo ${max} itens'
    }
});

export default yup;
