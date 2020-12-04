//#region Imports

import React from 'react';
import { Icon, Menu, Pagination, Table } from 'semantic-ui-react';
import PAGEABLE_FIELDS from 'utils/constants/field/pageable';

//#endregion

const TableFooter = ({ fetch, pageable }) => (
    <Table.Footer>
        <Table.Row>
            <Table.HeaderCell colSpan='3'>
                {pageable[PAGEABLE_FIELDS.TOTAL_PAGES] > 1 && (
                    <Menu floated='right'>
                        <Pagination
                            totalPages={pageable[PAGEABLE_FIELDS.TOTAL_PAGES]}
                            activePage={pageable[PAGEABLE_FIELDS.PAGE_NUMBER] + 1}
                            onPageChange={(_, { activePage }) => fetch(activePage - 1)}
                            prevItem={{ content: <Icon name='angle left' />, icon: true }}
                            nextItem={{ content: <Icon name='angle right' />, icon: true }}
                            lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                            firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                            ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                        />
                    </Menu>
                )}
            </Table.HeaderCell>
        </Table.Row>
    </Table.Footer>
);

export default TableFooter;
