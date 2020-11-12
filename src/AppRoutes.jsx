//#region Imports

import MenuUI from 'containers/MenuUI';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ROUTES from 'routes/routes';

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
