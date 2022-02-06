import React, {DetailedHTMLProps, TextareaHTMLAttributes} from 'react';
type DefaultInputPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>


type SuperTextareaPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
 input?: Object
  meta: {
   error: string
    touched: boolean
  }
}

export const TextArea:React.FC<SuperTextareaPropsType> = (props) => {
const {input, meta, ...restProps} = props
  const hasError = meta.touched && meta.error
  return (
    <>
      <textarea {...input} {...restProps}/>
      <div>{hasError && <span>{meta.error}</span>}</div>
    </>
  );
};
