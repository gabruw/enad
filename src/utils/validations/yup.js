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
        default: ({ label }) => `'${label}' é inválido`,
        required: ({ label }) => `'${label}' é um campo obrigatório`,
        oneOf: ({ label, values }) => `'${label}' deve ser um dos seguintes valores: ${values}`,
        notOneOf: ({ label, values }) => `'${label}' não pode ser um dos seguintes valores: ${values}`
    },
    string: {
        lowercase: ({ label }) => `'${label}' deve estar em maiúsculo`,
        uppercase: ({ label }) => `'${label}' deve estar em minúsculo`,
        url: ({ label }) => `'${label}' deve ter um formato de URL válida`,
        email: ({ label }) => `'${label}' tem o formato de e-mail inválido`,
        max: ({ label, max }) => `'${label}' deve ter no máximo ${max} caracteres`,
        min: ({ label, min }) => `'${label}' deve ter pelo menos ${min} caracteres`,
        trim: ({ label }) => `'${label}' não deve conter espaços no início ou no fim`,
        length: ({ label, length }) => `'${label}' deve ter exatamente ${length} caracteres`
    },
    number: {
        min: ({ label, min }) => `'${label}' deve ser no mínimo ${min}`,
        max: ({ label, max }) => `'${label}' deve ser no máximo ${max}`,
        integer: ({ label }) => `'${label}' deve ser um número inteiro`,
        positive: ({ label }) => `'${label}' deve ser um número positivo`,
        negative: ({ label }) => `'${label}' deve ser um número negativo`,
        lessThan: ({ label, less }) => `'${label}' deve ser menor que ${less}`,
        moreThan: ({ label, more }) => `'${label}' deve ser maior que ${more}`,
        notEqual: ({ label, notEqual }) => `'${label}' não pode ser igual à ${notEqual}`
    },
    date: {
        min: ({ label, min }) => `'${label}' deve ser maior que a data ${min}`,
        max: ({ label, max }) => `'${label}' deve ser menor que a data ${max}`
    },
    array: {
        min: ({ label, min }) => `'${label}' deve ter no mínimo ${min} itens`,
        max: ({ label, max }) => `'${label}' deve ter no máximo ${max} itens`
    }
});

export default yup;
