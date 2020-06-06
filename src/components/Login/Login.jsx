import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { requiredField } from '../../utilits/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import styles from './../common/FormsControls/FormControls.module.css';
import classes from './LoginForm.module.css'
import Button from 'react-bootstrap/Button'
import { Redirect } from 'react-router-dom';


const LoginForm = (props) => {

    return (

        <form onSubmit={props.handleSubmit} >
            <div className = {classes.login}>
                <Field placeholder={'Email'} name={'email'}
                    validate={[requiredField]}
                    component= {Input }/>
            </div>
            <div className = {classes.pass}>
                <Field placeholder={'Password'} name={'password'}
                    type = {'password'}
                    validate={[requiredField]}
                    component={Input} />

            </div>
            <div  className = {classes.check}>
                <Field component={Input} name={'rememberMe'} type={'checkbox'} />Remember me
                </div>
                {props.error && <div className = {styles.formSummaryError}>
                    {props.error}
                </div>}
            <div>
            <button>Login</button>
            </div>

        </form>
    )

}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => { 
        props.login(formData.email, formData.password, formData.rememberMe)
    }
 
    if(props.isAuth){
        return <Redirect to = {'/profile'} />
    } 
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
    

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);