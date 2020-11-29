//#region Imports

import ModalUI from 'containers/ModalUI';
import React, { forwardRef, useMemo } from 'react';

//#endregion

const ModalCrudUI = ({ isAdd = true, isEdit, isRemove, title, children, ...rest }, ref) => {
    const _title = useMemo(
        () =>
            (isRemove && 'Deseja mesmo continuar?') || (isEdit && `Editar ${title}`) || (isAdd && `Adicionar ${title}`),
        [isRemove, isEdit, isAdd]
    );

    const icon = useMemo(() => (isRemove && 'trash') || (isEdit && 'edit') || (isAdd && 'plus'), [
        isRemove,
        isEdit,
        isAdd
    ]);

    return (
        <ModalUI ref={ref} title={_title} icon={icon} {...rest}>
            {children}
        </ModalUI>
    );
};

export default forwardRef(ModalCrudUI);
