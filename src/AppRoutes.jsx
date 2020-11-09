//#region Imports

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ROUTES from './routes';

//#endregion

const AppRoutes = () => (
    <BrowserRouter>
        <Switch>
            {ROUTES.map((element) => (
                <Route key={element.path} path={element.path} exact={element.exact} component={element.component} />
            ))}
        </Switch>
    </BrowserRouter>
);

export default AppRoutes;
