//#region Imports

import PAGEABLE_FIELDS from 'utils/constants/field/pageable';

//#endregion

const CONTEXT_INITIAL_STATE = {
    selected: {},
    loading: false,
    [PAGEABLE_FIELDS.THIS]: {
        [PAGEABLE_FIELDS.PAGED]: 0,
        [PAGEABLE_FIELDS.OFFSET]: 0,
        [PAGEABLE_FIELDS.PAGE_SIZE]: 0,
        [PAGEABLE_FIELDS.TOTAL_PAGES]: 0,
        [PAGEABLE_FIELDS.PAGE_NUMBER]: 0,
        [PAGEABLE_FIELDS.TOTAL_PAGES]: 0
    }
};

export default CONTEXT_INITIAL_STATE;
