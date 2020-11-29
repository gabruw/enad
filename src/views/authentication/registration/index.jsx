//#region Imports
import { yupResolver } from '@hookform/resolvers/yup';
import User from 'assets/images/default-user.png';
import ButtonUI from 'components/ButtonUI';
import FieldWrapper from 'components/FieldWrapper';
import DateField from 'containers/DateField';
import React, { useCallback } from 'react';
import ReactFileReader from 'react-file-reader';
import { FormProvider, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import { Button, Form, Image } from 'semantic-ui-react';
import useSystemContext from 'storage/system/context';
import AUTHENTICATION_FIELDS from 'utils/constants/field/authentication';
import USER_FIELDS from 'utils/constants/field/user';
import AUTHENTICATION_LABELS from 'utils/constants/label/authentication';
import USER_LABELS from 'utils/constants/label/user';
import AUTHENTICATION_PLACEHOLDERS from 'utils/constants/placeholder/authentication';
import USER_PLACEHOLDERS from 'utils/constants/placeholder/user';
import IMAGE_TYPES from 'utils/constants/types/image-types';
import useRequestState from 'utils/hooks/useRequestState';
import { includeUser } from './../services/send-data';
import registrationSchema from './schema';
import styles from './styles.module.css';

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
    const { handleSubmit, setValue, errors } = methods;

    const { run, requestState } = useRequestState();
    const submitUser = useCallback((data) => run(async () => await includeUser(data)), [run]);

    const onSubmit = useCallback(
        async (data) => {
            await submitUser(data).then((response) => {
                setCanRefresh(false);
                addUser(response.data);
                history.push(ROUTE_NAME.IN.HOME);
            });
        },
        [submitUser, setCanRefresh, addUser, history]
    );

    return (
        <div className={styles.content}>
            <FormProvider {...methods}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.imageContent}>
                        <div className={styles.circular}>
                            <img src={User} className={styles.image} alt='user' />
                        </div>

                        <div className={styles.button}>
                            <ReactFileReader fileTypes={IMAGE_TYPES} handleFiles={() => {}} base64>
                                <ButtonUI color='secondary'>Adicionar Imagem</ButtonUI>
                            </ReactFileReader>
                        </div>
                    </div>

                    <div className={styles.field}>
                        <FieldWrapper
                            as={Form.Input}
                            errors={errors}
                            name={USER_FIELDS.NAME}
                            className={styles.field}
                            label={USER_LABELS.NAME}
                            placeholder={USER_PLACEHOLDERS.NAME}
                        />
                    </div>

                    <div className={styles.row}>
                        <div className={styles.halfField}>
                            <FieldWrapper
                                as={Form.Input}
                                errors={errors}
                                name={USER_FIELDS.CPF}
                                label={USER_LABELS.CPF}
                                className={styles.field}
                                placeholder={USER_PLACEHOLDERS.CPF}
                            />
                        </div>

                        <div className={styles.halfField}>
                            <FieldWrapper
                                as={DateField}
                                errors={errors}
                                setValue={setValue}
                                name={USER_FIELDS.BIRTH}
                                className={styles.field}
                                label={USER_LABELS.BIRTH}
                            />
                        </div>
                    </div>

                    <div className={styles.field}>
                        <FieldWrapper
                            as={Form.Input}
                            errors={errors}
                            className={styles.field}
                            name={AUTHENTICATION_FIELDS.EMAIL}
                            label={AUTHENTICATION_LABELS.EMAIL}
                            placeholder={AUTHENTICATION_PLACEHOLDERS.EMAIL}
                        />
                    </div>

                    <div className={styles.field}>
                        <FieldWrapper
                            as={Form.Input}
                            errors={errors}
                            className={styles.field}
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
        </div>
    );
};

export default Registration;
