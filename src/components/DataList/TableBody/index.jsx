//#region Imports

import React, { useCallback } from 'react';
import { Button, Icon, Table } from 'semantic-ui-react';
import styles from './styles.module.css';
import TableEmpty from './TableEmpty';

//#endregion

const TableBody = ({ headers, data, edit, isLoading, setSelectedId, show }) => {
    const removeConfirmation = useCallback(
        (id) => {
            setSelectedId(id);
            show();
        },
        [show, setSelectedId]
    );

    return (
        <Table.Body>
            {data ? (
                data.map((obj, dIndex) => (
                    <Table.Row key={dIndex}>
                        {headers.map(
                            (header, hIndex) =>
                                obj[header.field] && <Table.Cell key={hIndex}> {obj[header.field]} </Table.Cell>
                        )}

                        <Table.Cell textAlign='center'>
                            <Button.Group basic size='large' className={styles.withoutBorder}>
                                <Button
                                    loading={isLoading}
                                    onClick={() => edit(obj.id)}
                                    className={styles.withoutBorder}
                                    icon={<Icon name='edit' className={styles.icon} />}
                                />
                                <Button
                                    loading={isLoading}
                                    className={styles.withoutBorder}
                                    onClick={() => removeConfirmation(obj.id)}
                                    icon={<Icon name='trash' className={styles.icon} />}
                                />
                            </Button.Group>
                        </Table.Cell>
                    </Table.Row>
                ))
            ) : (
                <TableEmpty />
            )}
        </Table.Body>
    );
};

export default TableBody;
