//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import Logo from 'assets/images/logo.png';
import ButtonUI from 'components/ButtonUI';
import FieldWrapper from 'components/FieldWrapper';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import { Form, Grid, Image, Label } from 'semantic-ui-react';
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
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container className={styles.grid}>
                    <Grid.Row className={styles.logo}>
                        <Grid.Column verticalAlign='middle'>
                            <Image src={Logo} size='small' centered />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={8}>
                            <FieldWrapper
                                as={Form.Input}
                                errors={errors}
                                placeholder='email@email.com'
                                name={AUTHENTICATION_FIELDS.EMAIL}
                                label={AUTHENTICATION_LABELS.EMAIL}
                            />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column verticalAlign='middle' className={styles.iptPassword} width={8}>
                            <FieldWrapper
                                as={Form.Input}
                                errors={errors}
                                type='password'
                                name={AUTHENTICATION_FIELDS.PASSWORD}
                                label={AUTHENTICATION_LABELS.PASSWORD}
                            />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column className={styles.btLogin} width={6}>
                            <ButtonUI type='submit' isLoading={requestState.isLoading}>
                                Login
                            </ButtonUI>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={7} className={styles.btRegister}>
                            <Label key='medium' size='medium' onClick={() => setIsLogin(false)}>
                                Ainda não possuí um cadastro?
                                <strong>Clique aqui</strong>
                            </Label>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </form>
        </FormProvider>
    );
};

export default Login;
