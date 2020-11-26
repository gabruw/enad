//#region Imports

import ModalUI from 'containers/ModalUI';
import React, { Fragment, useCallback, useRef, useState } from 'react';
import { Button, Icon, Menu, Pagination, Table } from 'semantic-ui-react';
import styles from './styles.module.css';

//#endregion

const DataList = ({ headers, data, edit, remove, isLoading }) => {
    const modalRef = useRef();
    const [selectedId, setSelectedId] = useState(null);

    const removeConfirmation = useCallback(
        (id) => {
            setSelectedId(id);
            modalRef.current.show();
        },
        [setSelectedId]
    );

    return (
        <Fragment>
            <ModalUI
                icon='trash'
                ref={modalRef}
                title='Deseja mesmo continuar?'
                onClick={async () => await remove(selectedId)}
            >
                <div className={styles.modalText}>
                    Ao confirmar a solicitação, este item será excluído. Deseja continuar?
                </div>
            </ModalUI>

            <Table celled>
                <Table.Header>
                    <Table.Row>
                        {headers &&
                            headers.map((header, index) => (
                                <Table.HeaderCell key={index}>{header.label}</Table.HeaderCell>
                            ))}
                        <Table.HeaderCell width={1}>Ações</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {data &&
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
                        ))}
                </Table.Body>

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
            </Table>
        </Fragment>
    );
};

export default DataList;
