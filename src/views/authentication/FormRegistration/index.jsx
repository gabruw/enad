//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import User from 'assets/images/default-user.png';
import ButtonUI from 'components/ButtonUI';
import MessageBox from 'components/MessageBox';
import React, { useCallback, useState } from 'react';
import ReactFileReader from 'react-file-reader';
import { FormProvider, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import { Form } from 'semantic-ui-react';
import useSystemContext from 'storage/system/context';
import IMAGE_TYPES from 'utils/constants/types/image-types';
import useRequestState from 'utils/hooks/useRequestState';
import { formatLogin, formatRegister } from '../services/format-data';
import { login } from '../services/get-data';
import { includeUser } from '../services/send-data';
import FieldsRegistration from './FieldsRegistration';
import registrationSchema from './schema';
import styles from './styles.module.css';

//#endregion

const FormRegistration = ({ setCanRefresh, setIsLogin }) => {
    const history = useHistory();
    const { addUser } = useSystemContext();
    const [picture, setPicture] = useState(null);

    const methods = useForm({
        shouldFocusError: false,
        reValidateMode: 'onBlur',
        resolver: yupResolver(registrationSchema)
    });
    const { handleSubmit, setValue, errors } = methods;

    const { run, requestState } = useRequestState();
    const fecthLogin = useCallback((data) => run(() => login(data)), [run]);
    const submitUser = useCallback((data) => run(() => includeUser(data)), [run]);

    const onSubmit = useCallback(
        async (data) => {
            data = formatRegister(data, picture);

            await submitUser(data).then(async (userResponse) => {
                if (userResponse.success) {
                    setCanRefresh(false);
                    data = formatLogin(data);

                    await fecthLogin(data).then((loginResponse) => {
                        addUser(loginResponse.data);
                        history.push(ROUTE_NAME.IN.HOME);
                    });
                }
            });
        },
        [picture, submitUser, setCanRefresh, fecthLogin, addUser, history]
    );

    console.log('requestState', requestState);

    return (
        <div>
            <FormProvider {...methods}>
                <Form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <div className={styles.imageContent}>
                        <div className={styles.circular}>
                            <img src={User} className={styles.image} alt='user' />
                        </div>

                        <div className={styles.button}>
                            <ReactFileReader fileTypes={IMAGE_TYPES} handleFiles={(e) => setPicture(e.base64)} base64>
                                <ButtonUI color='secondary'>Adicionar Imagem</ButtonUI>
                            </ReactFileReader>
                        </div>
                    </div>

                    <FieldsRegistration {...{ errors, setValue }} />

                    <div className={styles.button}>
                        <ButtonUI
                            width='100%'
                            type='submit'
                            height='40px'
                            fontSize='16px'
                            isLoading={requestState.isLoading}
                        >
                            Registrar
                        </ButtonUI>
                    </div>

                    <div className={styles.footer}>
                        Já possuí uma conta?
                        <strong className={styles.strong} onClick={() => setIsLogin(true)}>
                            Faça o login
                        </strong>
                    </div>
                </Form>
            </FormProvider>

            <MessageBox list={requestState.errors} header='Erro ao efetuar o registro' error />
        </div>
    );
};

export default FormRegistration;
