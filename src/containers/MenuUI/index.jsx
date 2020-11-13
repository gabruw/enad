//#region Imports

import React, { Fragment, useState } from 'react';
import Sidebar from './SideMenu';
import TopMenu from './TopMenu';

//#endregion

const MenuUI = ({ children }) => {
    const [visible, setVisible] = useState(false);

    return (
        <Fragment>
            <TopMenu setVisible={setVisible} />
            <Sidebar visible={visible} setVisible={setVisible}>
                {children}
            </Sidebar>
        </Fragment>
    );
};

export default MenuUI;
