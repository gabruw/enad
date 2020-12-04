//#region Imports

import React, { Fragment } from 'react';
import { Icon } from 'semantic-ui-react';

//#endregion

const IconContent = ({ name, fontSize, ...rest }) => (
    <Fragment>
        {name && (
            <Icon
                name={name}
                style={{ fontSize: fontSize, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                {...rest}
            />
        )}
    </Fragment>
);

export default IconContent;
