//#region Imports

import React from 'react';
import { Table } from 'semantic-ui-react';

//#endregion

const TableHeader = ({ headers }) => (
    <Table.Header>
        <Table.Row>
            {headers && headers.map((header, index) => <Table.HeaderCell key={index}>{header.label}</Table.HeaderCell>)}
            <Table.HeaderCell width={1}>Ações</Table.HeaderCell>
        </Table.Row>
    </Table.Header>
);

export default TableHeader;
