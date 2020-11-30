//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import Logo from 'assets/images/logo.png';
import ButtonUI from 'components/ButtonUI';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import { Form, Image } from 'semantic-ui-react';
import useSystemContext from 'storage/system/context';
import useRequestState from 'utils/hooks/useRequestState';
import { login } from './../services/get-data';
import FieldsLogin from './FieldsLogin';
import loginSchema from './schema';
import styles from './styles.module.css';

//#endregion

const Login = ({ setCanRefresh, setIsLogin }) => {
    const history = useHistory();
    const { addUser } = useSystemContext();

    const methods = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(loginSchema)
    });
    const { handleSubmit, errors } = methods;

    const { run, requestState } = useRequestState();
    const fecthLogin = useCallback((data) => run(async () => await login(data)), [run]);

    const onSubmit = useCallback(
        async (data) => {
            await fecthLogin(data).then((response) => {
                setCanRefresh(false);
                addUser(response.data);
                history.push(ROUTE_NAME.IN.HOME);
            });
        },
        [fecthLogin, setCanRefresh, addUser, history]
    );

    return (
        <div>
            <FormProvider {...methods}>
                <Form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <div className={styles.logo}>
                        <Image src={Logo} className={styles.image} centered />
                    </div>

                    <FieldsLogin {...errors} />

                    <div className={styles.button}>
                        <ButtonUI
                            type='submit'
                            width='100%'
                            height='40px'
                            fontSize='16px'
                            isLoading={requestState.isLoading}
                        >
                            Login
                        </ButtonUI>
                    </div>

                    <div className={styles.footer}>
                        Não possuí uma conta?
                        <strong className={styles.strong} onClick={() => setIsLogin(false)}>
                            Cadastre-se
                        </strong>
                    </div>
                </Form>
            </FormProvider>
        </div>
    );
};

export default Login;
