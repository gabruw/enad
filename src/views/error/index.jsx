//#region Imports

import ErrorGif from 'assets/images/error-page.gif';
import ButtonUI from 'components/ButtonUI';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import styles from './styles.module.css';
import secureStorage from 'utils/functions/secureStorage';
import USER_FIELDS from 'utils/constants/field/user';
import { useMemo } from 'react';

//#endregion

const Error = () => {
    const history = useHistory();
    const user = useMemo(() => secureStorage.getItem([USER_FIELDS.THIS]), []);

    const handleClick = useCallback(() => {
        if (user) {
            return history.goBack();
        }

        return;
    }, [user, history]);
    return (
        <>
            <div className={styles.content}>
                <div className={styles.image}>
                    <div className={styles.code}>401</div>
                    <Image src={ErrorGif} />
                </div>

                <div className={styles.textContext}>
                    <div className={styles.title}>Não autorizado</div>
                    <div className={styles.description}>O usuário não está autorizado a visualizar está página</div>

                    <div className={styles.button}>
                        <ButtonUI
                            width='200px'
                            height='50px'
                            fontSize='20px'
                            startIcon='arrow left'
                            onClick={() => handleClick()}
                        >
                            Voltar
                        </ButtonUI>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Error;
