import { SignUpType } from '@/core/interface/auth';
import { Validator } from '@/utils/formValidators';
import { InputType } from 'zlib';

const validation = (initialValues: SignUpType): object => {
  let errors = {} as SignUpType;
  errors = validate(errors, initialValues.first_name, 'first_name', 'text');
  errors = validate(errors, initialValues.last_name, 'last_name', 'text');
  errors = validate(errors, initialValues.email, 'email', 'email');
  errors = validate(errors, initialValues.password1, 'password1', 'password');
  return errors;
};

const validate = (
  errors: SignUpType,
  value: string,
  target: string,
  type: InputType,
  minLength?: number,
  maxLength?: number,
) => {
  if (Validator.required(value)) {
    (errors as any)[target] = 'Field is required';
  } else if (Validator.minLength(value, minLength ?? 5)) {
    (errors as any)[target] = `Min length is ${minLength ?? 5}`;
  } else if (
    Validator.maxLength(value, maxLength ?? Number.POSITIVE_INFINITY)
  ) {
    (errors as any)[target] = `Max length is ${maxLength}`;
  } else if (type === 'email' && !Validator.email(value)) {
    (errors as any)[target] = `Incorrect email`;
  }

  return errors;
};

export default validation;
