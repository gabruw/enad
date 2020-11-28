//#region Imports

import ErrorGif from 'assets/images/error-page.gif';
import ButtonUI from 'components/ButtonUI';
import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import { Image } from 'semantic-ui-react';
import USER_FIELDS from 'utils/constants/field/user';
import secureStorage from 'utils/functions/secureStorage';
import styles from './styles.module.css';

//#endregion

const Error = () => {
    const history = useHistory();

    const user = useMemo(() => secureStorage.getItem([USER_FIELDS.THIS]), []);
    const buttonText = useMemo(() => (user ? 'Voltar' : 'Ir para a tela de Login'), [user]);

    const handleClick = useCallback(() => {
        if (user) {
            return history.goBack();
        }

        return history.push(ROUTE_NAME.OUT.LOGIN);
    }, [user, history]);

    return (
        <div className={styles.content}>
            <div className={styles.image}>
                <div className={styles.code}>401</div>
                <img src={ErrorGif} />
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
                        {buttonText}
                    </ButtonUI>
                </div>
            </div>
        </div>
    );
};

export default Error;
