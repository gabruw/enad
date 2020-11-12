//#region Imports

import MenuUI from 'components/MenuUI';
import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import verifyRoute from 'utils/constants/function/verifyRoute';
import ROUTES from './routes';

//#endregion

const AppRoutes = () => (
    <BrowserRouter>
        <Switch>
            {ROUTES.map((element) => (
                <Fragment key={element.path}>
                    {verifyRoute() ? (
                        <MenuUI>
                            <Route path={element.path} exact={element.exact} component={element.component} />
                        </MenuUI>
                    ) : (
                        <Route path={element.path} exact={element.exact} component={element.component} />
                    )}
                </Fragment>
            ))}
        </Switch>
    </BrowserRouter>
);

export default AppRoutes;
