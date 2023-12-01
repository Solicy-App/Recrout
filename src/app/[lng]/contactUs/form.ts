import * as Yup from 'yup';
import { TFunction } from 'i18next';
import { IMessage } from '@/core/interface/contact';

const validation = (t: TFunction) => {
  return Yup.object({
    name: Yup.string()
      .min(1, `${t('least')} 1 ${t('characters')}`)
      .max(15, `${t('less_than')} 15 ${t('characters')}`)
      .required(t('required')),
    message: Yup.string()
      .min(1, `${t('least')} 1 ${t('characters')}`)
      .max(15, `${t('less_than')} 15 ${t('characters')}`)
      .required(t('required')),
    email: Yup.string().email(t('invalid_email')).required(t('required')),
    phone: Yup.string()
      .min(5, `${t('least')} 5 ${t('characters')}`)
      .required(t('required')),
  });
};

const initialValues: IMessage = {
  email: '',
  message: '',
  name: '',
  phone: '',
};

export { validation, initialValues };
