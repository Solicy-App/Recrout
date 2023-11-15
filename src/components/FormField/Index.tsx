import { FC } from 'react';
import { Field, ErrorMessage } from 'formik';
import { InputType } from '@/core/enum/inputType';
import './Index.scss';

type FormFieldType = {
  type: InputType;
  fieldName: string;
  placeholder: string;
  errorMessage?: boolean;
  className?: string;
};

const FormField: FC<FormFieldType> = ({
  fieldName,
  type,
  placeholder,
  className,
  errorMessage,
}): JSX.Element => {
  return (
    <div className={className ?? 'field'}>
      <Field
        className={errorMessage ? 'error' : ''}
        type={type}
        name={fieldName}
        placeholder={placeholder}
      />
      {!errorMessage ? (
        <ErrorMessage className="message" name={fieldName} component="div" />
      ) : (
        <div className="message">{errorMessage}</div>
      )}
    </div>
  );
};

export default FormField;
