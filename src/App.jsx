//#region Imports

import 'assets/css/global.css';
import MenuUI from 'containers/MenuUI';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import AppRoutes from './AppRoutes';

//#endregion

const App = () => (
    <MenuUI>
        <AppRoutes />
    </MenuUI>
);

export default App;
