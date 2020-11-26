//#region Imports

import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

//#endregion

const ScreenLoader = ({ isLoading }) => (
    <Dimmer active={isLoading}>
        <Loader>Carregando</Loader>
    </Dimmer>
);

export default ScreenLoader;
