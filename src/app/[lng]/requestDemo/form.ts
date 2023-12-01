import { TFunction } from 'i18next';
import * as Yup from 'yup';

const validation = (t: TFunction) => {
  return Yup.object({
    email: Yup.string()
      .min(1, `${t('least')} 1 ${t('characters')}`)
      .email(t('invalid_email'))
      .required(t('required')),
    name: Yup.string()
      .max(15, `${t('less_than')} 15 ${t('characters')}`)
      .required(t('required')),
    phone: Yup.string()
      .min(5, `${t('least')} 5 ${t('characters')}`)
      .required(t('required')),
  });
};

const initialValues = {
  email: '',
  name: '',
  phone: '',
};

export { validation, initialValues };
