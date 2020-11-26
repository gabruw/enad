//#region Imports

import ModalUI from 'containers/ModalUI';
import React, { Fragment, useRef, useState } from 'react';
import { Table } from 'semantic-ui-react';
import styles from './styles.module.css';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import TableHeader from './TableHeader';

//#endregion

const DataList = ({ headers, data, edit, remove, isLoading }) => {
    const modalRef = useRef();
    const [selectedId, setSelectedId] = useState(null);

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
                <TableHeader headers={headers} />

                <TableBody
                    show={() => modalRef.current.show()}
                    {...{ headers, data, edit, setSelectedId, isLoading }}
                />

                <TableFooter />
            </Table>
        </Fragment>
    );
};

export default DataList;
