//#region Imports

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ROUTES from './routes';

//#endregion

const AppRoutes = () => (
    <BrowserRouter>
        <Switch>
            {ROUTES.map(({ path, exact, component }) => (
                <Route key={path} path={path} exact={exact} component={component} />
            ))}
        </Switch>
    </BrowserRouter>
);

export default AppRoutes;
