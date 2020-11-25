//#region Imports

import React from 'react';
import { useHistory } from 'react-router-dom';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import SIDEMENU_OPTIONS from 'utils/constants/side-menu';
import styles from './styles.module.css';
import clsx from 'clsx';

//#endregion

const SideMenu = ({ children, visible, setVisible }) => {
    const history = useHistory();

    return (
        <Sidebar.Pushable as={Segment} className={styles.pushable}>
            <Sidebar
                inverted
                vertical
                as={Menu}
                width='thin'
                icon='labeled'
                animation='push'
                visible={visible}
                className={styles.sidebar}
                onHide={() => setVisible(false)}
            >
                {SIDEMENU_OPTIONS.map((opt, index) => (
                    <Menu.Item key={index} as='a' className={styles.menu} onClick={() => history.push(opt.path)}>
                        <div className={styles.option}>
                            <Icon className={styles.icon} name={opt.icon} />
                            <span className={styles.text}>{opt.text}</span>
                        </div>
                    </Menu.Item>
                ))}
            </Sidebar>

            <Sidebar.Pusher className={styles.pusher}>
                <div className={clsx(styles.content, { [styles.intercept]: visible })}>{children}</div>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    );
};

export default SideMenu;
