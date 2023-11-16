import * as Yup from 'yup';

const validation = {
    email: Yup.string().min(1).email().required('Required'),
    name: Yup.string().max(15,'Must be less than 15 characters').required('Required'),
    phone: Yup.string().min(5,'Must be more than 5 characters').required('Required'),
}

const initialValues = {
    email: '',
    name: '',
    phone: '',
}

export {validation, initialValues}