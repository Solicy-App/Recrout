import { SignInType } from '@/core/interface/auth';
import { TFunction } from 'i18next';
import * as Yup from 'yup';

const initialValues: SignInType = {
    email: '',
    password: ''
}

const validation = (t: TFunction) => {
    return Yup.object({
        email: Yup.string().required(t('required')),
        password: Yup.string().required(t('required')),
    })
}

export { initialValues, validation }
