//#region Imports

import React from 'react';
import { Button } from 'semantic-ui-react';
import COLOR from 'utils/constants/theme/color';

//#endregion

const ButtonUI = ({ text, children, startIcon, isLoading, isDisabled, color = 'primary', ...rest }) => (
    <Button color={COLOR[color]} loading={isLoading} disabled={isDisabled || isLoading} {...rest}>
        {text || children}
    </Button>
);

export default ButtonUI;
