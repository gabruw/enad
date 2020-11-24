//#region Imports

import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import COLOR from 'utils/constants/theme/color';

//#endregion

const ButtonUI = ({ text, children, startIcon, endIcon, isLoading, isDisabled, color = 'primary', ...rest }) => (
    <Button color={COLOR[color]} loading={isLoading} disabled={isDisabled || isLoading} {...rest}>
        {startIcon && <Icon name={startIcon} />}
        {text || children}
        {endIcon && <Icon name={endIcon} />}
    </Button>
);

export default ButtonUI;
