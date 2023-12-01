import * as Yup from 'yup';
import { SignUpType } from '@/core/interface/auth';
import { TFunction } from 'i18next';

const validation = (t: TFunction) => {
  return Yup.object({
    first_name: Yup.string()
      .min(1, `${t('least')} 1 ${t('characters')}`)
      .max(15, `${t('less_than')} 15 ${t('characters')}`)
      .required(t('required')),
    last_name: Yup.string()
      .min(1, `${t('least')} 1 ${t('characters')}`)
      .max(15, `${t('less_than')} 15 ${t('characters')}`)
      .required(t('required')),
    password1: Yup.string()
      .min(8, `${t('least')} 8 ${t('characters')}`)
      .required(t('required')),
    confirmPassword: Yup.string()
      .min(8, `${t('least')} 8 ${t('characters')}`)
      .required(t('required')),
    terms: Yup.boolean().default(true).required(t('required')),
    remember_me: Yup.boolean().default(false),
    email: Yup.string().email(t('invalid_email')).required(t('required')),
  });
};
const initialValues: SignUpType = {
  email: '',
  first_name: '',
  last_name: '',
  password: '',
  confirmPassword: '',
  terms: false,
  remember_me: false,
};

export { validation, initialValues };
