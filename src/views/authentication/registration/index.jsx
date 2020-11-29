//#region Imports
import { yupResolver } from '@hookform/resolvers/yup';
import user from 'assets/images/default-user.png';
import Logo from 'assets/images/logo.png';
import ButtonUI from 'components/ButtonUI';
import FieldWrapper from 'components/FieldWrapper';
import React, { useCallback } from 'react';
import ReactFileReader from 'react-file-reader';
import { FormProvider, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import { Button, Form, Image } from 'semantic-ui-react';
import useSystemContext from 'storage/system/context';
import useRequestState from 'utils/hooks/useRequestState';
import REGISTRATION_FIELDS from './../../../utils/constants/field/registration';
import { registration } from './../services/get-data';
import styles from './styles.module.css';
import registrationSchema from './schema';
//#endregion

const Registration = ({ setCanRefresh, setIsLogin }) => {
    const history = useHistory();
    const { addUser } = useSystemContext();

    // handleFiles = (files) => {
    //     console.log(files.base64)
    // }

    const methods = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(registrationSchema)
    });
    const { handleSubmit, errors } = methods;

    const { run, requestState } = useRequestState();
    const fecthRegister = useCallback((data) => run(async () => await registration(data)), [run]);

    const onSubmit = useCallback(
        async (data) => {
            await fecthRegister(data).then((response) => {
                setCanRefresh(false);
                addUser(response.data);
                history.push(ROUTE_NAME.IN.HOME);
            });
        },
        [fecthRegister, setCanRefresh, addUser, history]
    );

    return (
        <div className={styles.content}>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.logo}>
                        <Image src={Logo} className={styles.image} centered />
                    </div>

                    <div>
                        <Image src={user} size='small' circular centered className='img' />
                        <ReactFileReader
                            fileTypes={['.jpg', '.png']}
                            base64={true}
                            multipleFiles={false}
                            handleSubmit={}
                        >
                            <Button className='btn-Img' secondary>
                                Adicionar Imagem
                            </Button>
                        </ReactFileReader>
                    </div>

                    <div>
                        <FieldWrapper
                            className={styles.field}
                            as={Form.Input}
                            errors={errors}
                            name={REGISTRATION_FIELDS.NAME}
                            label={REGISTRATION_FIELDS.NAME}
                            placeholder='Ricardo Rogerio Rodrigues'
                        />

                        <FieldWrapper
                            className={styles.field}
                            as={Form.Input}
                            errors={errors}
                            type='date'
                            name={REGISTRATION_FIELDS.BIRTH}
                            label={REGISTRATION_FIELDS.BIRTH}
                            placeholder='Data de Nascimento'
                        />

                        <FieldWrapper
                            className={styles.field}
                            as={Form.Input}
                            errors={errors}
                            name={REGISTRATION_FIELDS.CPF}
                            label={REGISTRATION_FIELDS.CPF}
                            placeholder='CPF'
                        />
                    </div>

                    <div>
                        <FieldWrapper
                            className={styles.field}
                            as={Form.Input}
                            errors={errors}
                            name={REGISTRATION_FIELDS.EMAIL}
                            label={REGISTRATION_FIELDS.EMAIL}
                            placeholder='email@email.com'
                        />
                    </div>

                    <div>
                        <FieldWrapper
                            className={styles.field}
                            as={Form.Input}
                            errors={errors}
                            name={REGISTRATION_FIELDS.PASSWORD}
                            label={REGISTRATION_FIELDS.PASSWORD}
                        />
                    </div>

                    <div>
                        <div className={styles.button}>
                            <ButtonUI
                                type='submit'
                                width='100%'
                                height='40px'
                                fontSize='16px'
                                isLoading={requestState.isLoading}
                            >
                                Registrar
                            </ButtonUI>
                        </div>
                    </div>

                    <div className={styles.footer}>
                        Já possuí uma conta?
                        <strong className={styles.strong} onClick={() => setIsLogin(true)}>
                            Faça o Login
                        </strong>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default Registration;
