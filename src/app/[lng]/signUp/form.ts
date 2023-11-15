import * as Yup from 'yup';
import { SignUpType } from '@/core/interface/auth';

const validation = Yup.object({
  first_name: Yup.string().min(1, 'Must be at least 8 characters').max(15, 'Must be less than 15 characters').required('Required'),
  last_name: Yup.string().min(1, 'Must be at least 8 characters').max(15, 'Must be less than 15 characters').required('Required'),
  password1: Yup.string().min(8, 'Must be at least 8 characters').required(),
  confirmPassword: Yup.string().min(8, 'Must be at least 8 characters').required(),
  terms: Yup.boolean().default(true).required(),
  remember_me: Yup.boolean().default(false),
  email: Yup.string().email('Invalid email').required('Required'),
});


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
