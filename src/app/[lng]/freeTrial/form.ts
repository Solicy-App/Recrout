import * as Yup from 'yup';
import { IFreeTrialBody } from '@/core/interface/freeTrial';

const validation = (t: any) => Yup.object({
  company_name: Yup.string().min(1, 'Must be at least 8 characters').required(t('hajox')),
  full_name: Yup.string().min(3, 'Must be at least 8 characters').required('Required'),
  website: Yup.string().min(3, 'Must be at least 8 characters').required('Required'),
  voucher: Yup.string().min(3, 'Must be at least 8 characters').max(15, 'Must be less than 15 characters'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const initialValues: IFreeTrialBody = {
  company_name: '',
  email: '',
  full_name: '',
  website: '',
  voucher: '',
}

export  {validation, initialValues};
