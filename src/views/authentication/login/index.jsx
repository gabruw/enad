//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import Logo from 'assets/images/logo.png';
import ButtonUI from 'components/ButtonUI';
import FieldWrapper from 'components/FieldWrapper';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import { Form, Image } from 'semantic-ui-react';
import useSystemContext from 'storage/system/context';
import AUTHENTICATION_FIELDS from 'utils/constants/field/authentication';
import AUTHENTICATION_LABELS from 'utils/constants/label/authentication';
import useRequestState from 'utils/hooks/useRequestState';
import { login } from './../services/get-data';
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
        <div className={styles.content}>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.logo}>
                        <Image src={Logo} className={styles.image} centered />
                    </div>

                    <div className={styles.field}>
                        <FieldWrapper
                            as={Form.Input}
                            errors={errors}
                            placeholder='email@email.com'
                            name={AUTHENTICATION_FIELDS.EMAIL}
                            label={AUTHENTICATION_LABELS.EMAIL}
                        />
                    </div>

                    <div className={styles.field}>
                        <FieldWrapper
                            as={Form.Input}
                            errors={errors}
                            type='password'
                            name={AUTHENTICATION_FIELDS.PASSWORD}
                            label={AUTHENTICATION_LABELS.PASSWORD}
                        />
                    </div>

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
                        <strong className={styles.strong} onClick={() => {}}>
                            Cadastre-se
                        </strong>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default Login;
