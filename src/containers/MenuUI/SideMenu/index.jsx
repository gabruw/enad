//#region Imports

import React from 'react';
import { useHistory } from 'react-router-dom';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import SIDEMENU_OPTIONS from 'utils/constants/routes/side-menu';
import './styles.modules.css';

//#endregion

const SideMenu = ({ children, visible, setVisible }) => {
    const history = useHistory();

    return (
        <Sidebar.Pushable as={Segment}>
            <Sidebar
                inverted
                vertical
                as={Menu}
                width='thin'
                icon='labeled'
                animation='push'
                visible={visible}
                onHide={() => setVisible(false)}
            >
                {SIDEMENU_OPTIONS.map((opt, index) => (
                    <Menu.Item key={index} as='a' onClick={() => history.push(opt.path)}>
                        <div className='option'>
                            <Icon name={opt.icon} />
                            <span className='text'>{opt.text}</span>
                        </div>
                    </Menu.Item>
                ))}
            </Sidebar>

            <Sidebar.Pusher>{children}</Sidebar.Pusher>
        </Sidebar.Pushable>
    );
};

export default SideMenu;
