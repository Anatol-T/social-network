import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


type SuperTextareaPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
 input?: Object
  meta: {
   error: string
    touched: boolean
  }
}

export const Input:React.FC<SuperTextareaPropsType> = (props) => {
const {input, meta, ...restProps} = props
  const hasError = meta.touched && meta.error
  return (
    <>
      <input {...input} {...restProps}/>
      <div>{hasError && <span>{meta.error}</span>}</div>
    </>
  );
};
