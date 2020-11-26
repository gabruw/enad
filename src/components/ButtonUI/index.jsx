//#region Imports

import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import COLOR from 'utils/constants/theme/color';
import styles from './styles.module.css';

//#endregion

const ButtonUI = ({
    text,
    width,
    endIcon,
    children,
    startIcon,
    color = 'primary',
    isLoading = false,
    isDisabled = false,
    ...rest
}) => (
    <Button
        loading={isLoading}
        disabled={isDisabled || isLoading}
        style={{ background: COLOR[color], color: '#FFFFFF', width: width }}
        {...rest}
    >
        <div className={styles.content}>
            {startIcon && <Icon name={startIcon} />}
            {text || children}
            {endIcon && <Icon name={endIcon} />}
        </div>
    </Button>
);

export default ButtonUI;
