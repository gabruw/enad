//#region Imports

import React, { useCallback } from 'react';
import { Button, Icon, Table } from 'semantic-ui-react';
import styles from './styles.module.css';
import Loading from 'assets/images/table-loading.gif';

//#endregion

const TableEmpty = () => (
    <div className={styles.container}>
        <img className={styles.image} src={Loading} alt='loading' />
        <div className={styles.content}>
            <div className={styles.title}>Nenhum registro foi encontrado</div>
            <div className={styles.text}>Ao cadastrar, o mesmo ficará listado aqui</div>
        </div>
    </div>
);

export default TableEmpty;
