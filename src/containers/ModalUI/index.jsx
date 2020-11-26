//#region Imports

import ButtonUI from 'components/ButtonUI';
import React, { forwardRef, Fragment, useCallback, useImperativeHandle, useState } from 'react';
import { Header, Icon, Modal } from 'semantic-ui-react';
import styles from './styles.module.css';

//#endregion

const ModalUI = ({ children, actions, title, icon, onOpen, onClose, onClick }, ref) => {
    const [control, setControl] = useState(false);

    const handleOpen = useCallback(() => setControl(true), [setControl]);
    const handleClose = useCallback(() => setControl(false), [setControl]);

    useImperativeHandle(ref, () => ({
        show: () => handleOpen(),
        hide: () => handleClose()
    }));

    const whenClick = useCallback(() => {
        onClick && onClick();
        handleClose();
    }, [onClick, handleClose]);

    const whenOpen = useCallback(() => {
        onOpen && onOpen();
        handleOpen();
    }, [onOpen, handleOpen]);

    const whenClose = useCallback(() => {
        onClose && onClose();
        handleClose();
    }, [onClose, handleClose]);

    return (
        <Modal closeIcon open={control} onOpen={() => whenOpen()} onClose={() => whenClose()}>
            {title && (
                <Header
                    icon={<Icon name={icon} className={styles.icon} />}
                    content={<div className={styles.title}>{title}</div>}
                />
            )}

            <Modal.Content>{children}</Modal.Content>
            <Modal.Actions>
                {actions || (
                    <Fragment>
                        <ButtonUI color='light-red' onClick={() => handleClose()}>
                            <Icon name='remove' /> Fechar
                        </ButtonUI>

                        <ButtonUI onClick={() => whenClick()}>
                            <Icon name='checkmark' /> Concluir
                        </ButtonUI>
                    </Fragment>
                )}
            </Modal.Actions>
        </Modal>
    );
};

export default forwardRef(ModalUI);
