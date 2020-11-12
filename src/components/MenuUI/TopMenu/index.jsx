//#region Imports

import React from 'react';
import { Button, Dropdown, Icon, Menu } from 'semantic-ui-react';
import AvatarTrigger from './Avatar';
import './styles.modules.css';

//#endregion

const TopMenu = ({ setVisible }) => {
    return (
        <Menu stackable>
            <Menu.Menu position='left'>
                <Menu.Item className='customItem'>
                    <Button icon className='hoverItem' onClick={() => setVisible(true)}>
                        <Icon name='align justify' />
                    </Button>
                </Menu.Item>
            </Menu.Menu>

            <Menu.Menu position='right'>
                <Dropdown
                    item
                    text='Language'
                    trigger={
                        <AvatarTrigger
                            texto='Teste'
                            image='https://allextruded.com/templates/allextruded/img/user.jpg'
                        />
                    }
                >
                    <Dropdown.Menu>
                        <Dropdown.Header content='Configurações' icon='settings' />
                        <Dropdown.Item>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Menu>
        </Menu>
    );
};

export default TopMenu;
