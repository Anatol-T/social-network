import React from 'react';
import  {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/Input";
import {requiredField} from "../../utils/validators/validators";
import {useDispatch, useSelector} from "react-redux";
import { loginTC} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";


export function LoginPage  ()  {
  const dispatch = useDispatch()
  const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

  const onSubmit = (formData:FormDataType) => {
    console.log(formData)
    dispatch(loginTC(formData.email, formData.password, formData.rememberMe, formData.captcha))
  }
  if (isAuth) {
    return <Redirect to={"/profile"}/>
  }
  return (
    <div>
      <h3>Login</h3>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
}

type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  const captchaUrl = useSelector<AppStateType, string>(state => state.auth.captchaUrl)
  console.log('q', captchaUrl)
  return (
    <form onSubmit={props.handleSubmit}>
      <fieldset>
        <Field  placeholder={'Email'} name={"email"} component={Input} validate={[requiredField]}/>
      </fieldset>
      <fieldset>
        <Field
          placeholder={'Password'}
          name={"password"}
          component={Input}
          validate={[requiredField]}
        type={"password"}/>
      </fieldset>
      <fieldset>
        <Field type={"checkbox"} name={"rememberMe"} component={"input"}/>remember me
      </fieldset>
      {captchaUrl &&
      <fieldset>
        <img src={captchaUrl} alt={"captcha"}/>
        <Field  placeholder={'captcha'} name={"captcha"} component={Input} validate={[requiredField]}/>
      </fieldset>}
      {props.error && <div>{props.error}</div>}
      <button>Log in</button>
    </form>
  )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)