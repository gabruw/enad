//#region Imports

import React, { Fragment } from 'react';
import { Message } from 'semantic-ui-react';

//#endregion

const MessageBox = ({ list = [], header, error = false, success = false, warning = false }) => (
    <Fragment>
        {list && list.length > 0 && (
            <Message
                error={error}
                header={header}
                success={success}
                warning={warning}
                list={list.map((err) => err.text)}
            />
        )}
    </Fragment>
);

export default MessageBox;
