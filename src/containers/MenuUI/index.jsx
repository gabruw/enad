//#region Imports

import React, { Fragment, useState } from 'react';
import verifyRoute from 'utils/constants/function/verifyRoute';
import Sidebar from './SideMenu';
import TopMenu from './TopMenu';

//#endregion

const MenuUI = ({ children }) => {
    const [visible, setVisible] = useState(false);

    return verifyRoute() ? (
        <Fragment>
            <TopMenu setVisible={setVisible} />
            <Sidebar visible={visible} setVisible={setVisible}>
                {children}
            </Sidebar>
        </Fragment>
    ) : (
        children
    );
};

export default MenuUI;
