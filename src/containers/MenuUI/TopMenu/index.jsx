//#region Imports

import clsx from 'clsx';
import React from 'react';
import { Button, Dropdown, Icon, Menu } from 'semantic-ui-react';
import AvatarTrigger from './Avatar';
import styles from './styles.module.css';

//#endregion

const TopMenu = ({ setVisible }) => {
    const buttonClass = clsx(styles.hoverItem, styles.hamburguerButton);

    return (
        <Menu stackable className={styles.menu}>
            <Menu.Menu position='left'>
                <Menu.Item className={styles.item}>
                    <Button icon className={buttonClass} onClick={() => setVisible(true)}>
                        <Icon name='align justify' />
                    </Button>
                </Menu.Item>
            </Menu.Menu>

            <Menu.Menu position='right'>
                <Dropdown item className={clsx(styles.hoverItem, styles.icon)} trigger={<AvatarTrigger />}>
                    <Dropdown.Menu>
                        <Dropdown.Header content='Configurações' icon='settings' />
                        <Dropdown.Item>
                            <Icon name='bed' />
                            Logout
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Menu>
        </Menu>
    );
};

export default TopMenu;
