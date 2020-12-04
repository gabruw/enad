//#region Imports

import React from 'react';
import { Button } from 'semantic-ui-react';
import COLOR from 'utils/constants/theme/color';
import IconContent from './IconContent';
import styles from './styles.module.css';
import clsx from 'clsx';

//#endregion

const ButtonUI = ({
    text,
    width,
    height,
    endIcon,
    children,
    fontSize,
    startIcon,
    className,
    color = 'primary',
    isLoading = false,
    isDisabled = false,
    ...rest
}) => (
    <Button
        loading={isLoading}
        disabled={isDisabled || isLoading}
        className={clsx(styles.button, className)}
        style={{ background: COLOR[color], color: '#FFFFFF', width: width, height: height }}
        {...rest}
    >
        <div className={styles.content}>
            <IconContent name={startIcon} fontSize={fontSize} />
            <span style={{ fontSize: fontSize }}>{text || children}</span>
            <IconContent name={endIcon} fontSize={fontSize} />
        </div>
    </Button>
);

export default ButtonUI;
