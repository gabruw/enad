//#region Imports

import React from 'react';
import { Button, Dropdown, Icon, Menu } from 'semantic-ui-react';
import AvatarTrigger from './Avatar';
import './styles.modules.css';

//#endregion

const TopMenu = ({ setVisible }) => (
    <Menu stackable>
        <Menu.Menu position='left'>
            <Menu.Item className='customItem'>
                <Button icon className='hoverItem' onClick={() => setVisible(true)}>
                    <Icon name='align justify' />
                </Button>
            </Menu.Item>
        </Menu.Menu>

        <Menu.Menu position='right'>
            <Dropdown item className='hoverItem' trigger={<AvatarTrigger />}>
                <Dropdown.Menu>
                    <Dropdown.Header content='Configurações' icon='settings' />
                    <Dropdown.Item>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Menu>
    </Menu>
);

export default TopMenu;
