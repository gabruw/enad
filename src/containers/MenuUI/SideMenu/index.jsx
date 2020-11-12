//#region Imports

import React from 'react';
import { Menu, Segment, Sidebar } from 'semantic-ui-react';
import './styles.modules.css';
import { Icon } from 'semantic-ui-react';

//#endregion

const SideMenu = ({ children, visible, setVisible }) => {
    return (
        <Sidebar.Pushable as={Segment}>
            <Sidebar
                as={Menu}
                inverted
                vertical
                width='thin'
                icon='labeled'
                animation='push'
                visible={visible}
                onHide={() => setVisible(false)}
            >
                <Menu.Item as='a'>
                    <Icon name='home' size='mini' />
                    Home
                </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher>{children}</Sidebar.Pusher>
        </Sidebar.Pushable>
    );
};

export default SideMenu;
