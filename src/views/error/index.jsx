//#region Imports

import ErrorGif from 'assets/images/error-page.gif';
import ButtonUI from 'components/ButtonUI';
import React, { useCallback, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import useSystemContext from 'storage/system/context';
import PAGE_ERRORS from 'utils/constants/error/page';
import ERROR_FIELDS from 'utils/constants/field/error';
import USER_FIELDS from 'utils/constants/field/user';
import secureStorage from 'utils/functions/secureStorage';
import styles from './styles.module.css';

//#endregion

const Error = () => {
    const history = useHistory();
    const { error, setRequestError } = useSystemContext();

    const _error = useMemo(() => PAGE_ERRORS[error], [error]);
    const user = useMemo(() => secureStorage.getItem([USER_FIELDS.THIS]), []);
    const buttonText = useMemo(() => (user ? 'Voltar' : 'Ir para a tela de login'), [user]);

    const handleClick = useCallback(() => (user ? history.goBack() : history.push(ROUTE_NAME.OUT.LOGIN)), [
        user,
        history
    ]);

    useEffect(() => {
        return () => {
            error && setRequestError();
        };
    }, [error, setRequestError]);

    return (
        <div className={styles.content}>
            <div className={styles.image}>
                <div className={styles.code}>{error}</div>
                <img src={ErrorGif} alt='Error' />
            </div>

            <div className={styles.textContext}>
                <div className={styles.title}>{_error[ERROR_FIELDS.TITLE]}</div>
                <div className={styles.description}>{_error[ERROR_FIELDS.DESCRIPTION]}</div>

                <div className={styles.button}>
                    <ButtonUI
                        height='50px'
                        fontSize='20px'
                        startIcon='arrow left'
                        onClick={() => handleClick()}
                        width={user ? '200px' : '300px'}
                    >
                        {buttonText}
                    </ButtonUI>
                </div>
            </div>
        </div>
    );
};

export default Error;
