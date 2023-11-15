import * as Yup from 'yup';
import { IMessage } from '@/core/interface/contact';

const validation = Yup.object({
    name: Yup.string().min(1, 'Must be at least 8 characters').max(15, 'Must be less than 15 characters').required('Required'),
    message: Yup.string().min(1, 'Must be at least 8 characters').max(15, 'Must be less than 15 characters').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().min(5).required('Required'),
  });
  
  
  const initialValues: IMessage = {
    email: '',
    message: '',
    name: '',
    phone: '',
  }

  export { validation, initialValues };
