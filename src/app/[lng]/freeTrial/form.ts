import * as Yup from 'yup';
import { TFunction } from 'i18next';
import { IFreeTrialBody } from '@/core/interface/freeTrial';

const validation = (t: TFunction) =>
  Yup.object({
    company_name: Yup.string()
      .min(1, `${t('least')} 1 ${t('characters')}`)
      .required(t('required')),
    full_name: Yup.string()
      .min(3, `${t('least')} 3 ${t('characters')}`)
      .required(t('required')),
    website: Yup.string()
      .min(3, `${t('least')} 3 ${t('characters')}`)
      .required(t('required')),
    voucher: Yup.string()
      .min(3, `${t('least')} 3 ${t('characters')}`)
      .max(15, `${t('less_than')} 15 ${t('characters')}`),
    email: Yup.string().email(t('invalid_email')).required(t('required')),
  });

const initialValues: IFreeTrialBody = {
  company_name: '',
  email: '',
  full_name: '',
  website: '',
  voucher: '',
};

export { validation, initialValues };
