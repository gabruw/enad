//#region Imports

import React from 'react';
import AppRoutes from './AppRoutes';
import  USER_FIELDS  from 'utils/constants/field/user';
import { SystemContextProvider } from 'storage/system/context';
import 'semantic-ui-css/semantic.min.css';
import 'assets/css/global.css';

//#endregion

const App = () => {
    // Repopular System Context
    const user = JSON.parse(localStorage.getItem([USER_FIELDS.THIS]));

    return (
        <SystemContextProvider defaultValues={{ user }}>
            <AppRoutes />
        </SystemContextProvider>
    );
};
export default App;
