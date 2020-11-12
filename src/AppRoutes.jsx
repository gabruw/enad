//#region Imports

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MenuUI from './containers/MenuUI/index';
import ROUTES from './utils/constants/routes/routes';

//#endregion

const AppRoutes = () => (
    <BrowserRouter>
        <Switch>
            {ROUTES.map(({ path, exact, component }) => (
                <Route key={path} path={path} exact={exact}>
                    <MenuUI>{component}</MenuUI>
                </Route>
            ))}
        </Switch>
    </BrowserRouter>
);

export default AppRoutes;
