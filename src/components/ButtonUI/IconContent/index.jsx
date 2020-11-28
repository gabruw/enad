//#region Imports

import React, { Fragment } from 'react';
import { Icon } from 'semantic-ui-react';
import styles from '../styles.module.css';

//#endregion

const IconContent = ({ name, fontSize, ...rest }) => (
    <Fragment>
        {name && <Icon name={name} style={{ fontSize: fontSize }} className={styles.content} {...rest} />}
    </Fragment>
);

export default IconContent;
