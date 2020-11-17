//#region Imports

import React, { Fragment } from 'react';
import { Message } from 'semantic-ui-react';

//#endregion

const MessageBox = ({ list = [], header, error = false, success = false, warning = false }) => (
    <Fragment>
        {list && list.length > 0 && (
            <Message list={list} header={header} error={error} success={success} warning={warning} />
        )}
    </Fragment>
);

export default MessageBox;
