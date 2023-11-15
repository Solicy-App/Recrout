import { InputType } from '@/core/enum/inputType';
import { SignUpType } from '@/core/interface/auth';
import { Validator } from '@/utils/formValidators';

let values: SignUpType;

const validation = (initialValues: SignUpType): object => {
  values = initialValues;
  let errors = {} as SignUpType;
  errors = validate(errors, initialValues.first_name, 'first_name', InputType.text ,true);
  errors = validate(errors, initialValues.last_name, 'last_name', InputType.text);
  errors = validate(errors, initialValues.email, 'email', InputType.email);
  errors = validate(errors, initialValues.password1, 'password1', InputType.password);
  errors = validate(errors, initialValues.confirmPassword, 'confirmPassword', InputType.confirmPassword);
  return errors;
};

const validate = (
  errors: SignUpType,
  value: string,
  target: string,
  type: InputType,
  required?: boolean,
  minLength?: number,
  maxLength?: number,
) => {
  switch (true) {
    case required && Validator.required(value):
      (errors as any)[target] = 'Field is required';
      break;
    case minLength && Validator.minLength(value, minLength):
      (errors as any)[target] = `Please enter at least ${minLength ?? 5} characters`;
      break;
    case maxLength && Validator.maxLength(value, maxLength ?? Number.POSITIVE_INFINITY):
      (errors as any)[target] = `Please enter at least ${maxLength} characters`;
      break;
    case type === InputType.email && !Validator.email(value):
      (errors as any)[target] = 'Incorrect email';
      break;
    case type === InputType.confirmPassword && !Validator.repeatPassowrd(values.password1, values.confirmPassword):
      (errors as any)[target] = 'Password doesn\'t match';
      break;
    default:
      break;
  }

  return errors;
};

const initialValues: SignUpType = {
  email: '',
  first_name: '',
  last_name: '',
  password1: '',
  confirmPassword: '',
  terms: false,
  remember_me: false,
}

export  {validation, initialValues};
