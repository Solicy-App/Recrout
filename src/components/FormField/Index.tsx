import React, { FC } from 'react';
import { Field, ErrorMessage } from 'formik';
import { InputType } from '@/core/enum/inputType';
import './Index.scss';

type FormFieldType = {
  type: InputType;
  fieldName: string;
  placeholder: string;
  className?: string;
  inputClassName?: string
};

const FormField: FC<FormFieldType> = ({
  fieldName,
  type,
  placeholder,
  className,
  inputClassName,
}): JSX.Element => {
  return (
    <div className={className ?? 'field'}>
      <Field
        className={inputClassName ?? ''}
        type={type}
        name={fieldName}
        placeholder={placeholder}
      />
      <ErrorMessage className="message" name={fieldName} component="div" />
    </div>
  );
};

export default FormField;
