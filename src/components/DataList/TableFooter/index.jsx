//#region Imports

import React from 'react';
import { Icon, Menu, Pagination, Table } from 'semantic-ui-react';

//#endregion

const TableFooter = () => (
    <Table.Footer>
        <Table.Row>
            <Table.HeaderCell colSpan='3'>
                <Menu floated='right'>
                    <Pagination
                        totalPages={10}
                        defaultActivePage={1}
                        prevItem={{ content: <Icon name='angle left' />, icon: true }}
                        nextItem={{ content: <Icon name='angle right' />, icon: true }}
                        lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                        firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                        ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                    />
                </Menu>
            </Table.HeaderCell>
        </Table.Row>
    </Table.Footer>
);

export default TableFooter;
