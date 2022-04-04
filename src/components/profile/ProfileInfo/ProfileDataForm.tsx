import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/Input";
import {requiredField} from "../../../utils/validators/validators";
import {TextArea} from "../../common/TextArea";
import { saveProfileTC} from "../../../redux/profileReducer";
import {useDispatch} from "react-redux";

type PropsType = {
  userID: number
  initialValues: Partial<FormDataType>
  setEditMode: (isEdit: boolean) => void
}
export const ProfileDataForm = ({setEditMode, userID, initialValues}:PropsType) => {
  const dispatch = useDispatch()
  const onSubmit = (formData: FormDataType) => {
    console.log(formData)
    dispatch(saveProfileTC(formData, userID))
    setEditMode(false)
  }

  return (
    <div>
      <ProfileReduxForm onSubmit={onSubmit} initialValues={initialValues}/>
    </div>
  )
}
type FormDataType = {
  fullName: string
  aboutMe: string
  lookingForAJobDescription: string
  lookingForAJob: boolean
}

const Fields: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <fieldset >
        <legend>Full name</legend>
        <Field placeholder={'fullName'} name={"fullName"} component={Input} validate={[requiredField]}/>
      </fieldset>
      <fieldset >
        <legend>About me</legend>
        <Field placeholder={'aboutMe'} name={"aboutMe"} component={TextArea} />
      </fieldset>
      <fieldset>
        <Field type={"checkbox"} name={"lookingForAJob"} component={"input"}/>Looking for a job
      </fieldset>
      <fieldset >
        <legend>Description</legend>
        <Field
          placeholder={'Description'}
          name={"lookingForAJobDescription"}
          component={TextArea}
        />
      </fieldset>

      {props.error && <div>{props.error}</div>}
      <button>Save</button>
    </form>
  )
}

const ProfileReduxForm = reduxForm<FormDataType>({form: 'editProfile'})(Fields)