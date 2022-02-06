import React from 'react';
import  {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/Input";
import {requiredField} from "../../utils/validators/validators";


export function LoginPage  ()  {
  const onSubmit = (formData:FormDataType) => {
    console.log(formData)
    //login(formData.login, formData.password, formData.rememberMe)
  }
  return (
    <div>
      <h3>Login</h3>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <fieldset>
        <Field  placeholder={'Login'} name={"login"} component={Input} validate={[requiredField]}/>
      </fieldset><
      fieldset>
        <Field  placeholder={'Password'} name={"password"} component={Input} validate={[requiredField]}/>
      </fieldset>
      <fieldset>
        <Field type={"checkbox"} name={"rememberMe"} component={"input"}/>remember me
      </fieldset>
      <button>Log in</button>
    </form>
  )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)