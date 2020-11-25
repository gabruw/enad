//#region Imports
import { yupResolver } from '@hookform/resolvers/yup';
import 'assets/css/fonts.css';
import 'assets/css/global.css';
import Logo from 'assets/images/logo.png';
import FieldWrapper from 'components/FieldWrapper';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, Form, Grid, Image, Label, Segment } from 'semantic-ui-react';
import categorySchema from '../../category/FormCategory/schema';
import './styles.modules.css';

//#endregion

const Login = ({ setIsLogin }) => {
console.log(setIsLogin)
const methods = useForm({
reValidateMode: 'onBlur',
resolver: yupResolver(categorySchema)
});

const { handleSubmit, errors } = methods;

const onSubmit = () => {};

return (
<FormProvider {...methods}>
    <form onSubmit={handleSubmit(onSubmit)}>
            <div id='bloco'>
        <Grid container className='grid'>
                <Grid.Row className='logo'>
                    <Grid.Column verticalAlign='middle'>
                        <Image src={Logo} size='small' centered />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column  width={8}>
                        <FieldWrapper as={Form.Input} errors={errors} label="E-mail" name="Email"
                            placeholder='email@email.com' />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column verticalAlign='middle' className='iptPassword'  width={8}>
                        <FieldWrapper as={Form.Input} errors={errors} label="Senha" type='password' name="Senha"
                            placeholder='Senha' />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column className='btLogin' width={6}>
                        <Button fluid content='Login' primary />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={7} className='btRegister'>
                        <Label key='medium' size='medium' onClick={()=> setIsLogin(false)}>
                            Deseja criar uma conta, <a href='#'>clique aqui</a>
                        </Label>
                    </Grid.Column>
                </Grid.Row>
        </Grid>
        </div>

    </form>
</FormProvider>
)
};

export default Login;
