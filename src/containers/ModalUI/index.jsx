//#region Imports

import ButtonUI from 'components/ButtonUI';
import React, { forwardRef, Fragment, useCallback, useImperativeHandle, useState } from 'react';
import { Header, Icon, Modal } from 'semantic-ui-react';

//#endregion

const ModalUI = ({ children, actions, title, icon, onClose }, ref) => {
    const [control, setControl] = useState(false);

    const handleOpen = useCallback(() => setControl(true), [setControl]);
    const handleClose = useCallback(() => setControl(false), [setControl]);

    useImperativeHandle(ref, () => ({
        show: () => handleOpen(),
        hide: () => handleClose()
    }));

    const whenClose = useCallback(() => {
        onClose && onClose();
        handleClose();
    }, [handleClose]);

    return (
        <Modal closeIcon open={control} onOpen={() => handleOpen()} onClose={() => whenClose()}>
            <Header icon={icon} content={title} />
            <Modal.Content>{children}</Modal.Content>
            <Modal.Actions>
                {actions || (
                    <Fragment>
                        <ButtonUI color='red' onClick={() => handleClose(false)}>
                            <Icon name='remove' /> Fechar
                        </ButtonUI>

                        <ButtonUI color='green' onClick={() => handleOpen(false)}>
                            <Icon name='checkmark' /> Concluir
                        </ButtonUI>
                    </Fragment>
                )}
            </Modal.Actions>
        </Modal>
    );
};

export default forwardRef(ModalUI);
