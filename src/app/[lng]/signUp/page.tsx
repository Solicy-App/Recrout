'use client'
import React, { ChangeEvent, useState } from 'react';
import { SignUpType } from '@/core/interface/auth';
import { AuthService } from '../../../../services/auth/auth';
import { resetForm } from '@/utils/reset-form';
import { handleInputChange } from '@/helpers/inputHandler';
import { formDataConverter } from '@/helpers/stateToFormData';
import { useTranslation } from '../../i18n/client'
import { Formik, Form } from 'formik';
import FormField from '@/components/FormField/Index';
import validation from './form-validation';
import './index.scss';
import Button from '@/components/Button/Index';
const SignUp: React.FC<any> = ({ params:{ lng } }) => {
  const { t } = useTranslation(lng, 'common')
  const [creds, setCreds] = useState<SignUpType>({
    email: '',
    first_name: '',
    last_name: '',
    password1: '',
    confirmPassword: '',
    terms: false,
    remember_me: false,
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    handleInputChange(e, setCreds)
};

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    const signUpForm = formDataConverter(creds, 'confirmPassword')
    await AuthService.signUp(signUpForm);
    setCreds({...resetForm(creds)})
  };

  return (
    <div className="sign-up-page">
      <div className="form-container">
        <h2 className="title">{t('sign_up')}</h2>
        <Formik initialValues={creds} validateOnChange={true} validate={(values) => validation(values)} onSubmit={(values, actions) => {console.log({values, actions})}}>
          <Form>
            <FormField lang={lng} fieldName='first_name' type='text'/>
            <FormField lang={lng} fieldName='last_name' type='text'/>
            <FormField lang={lng} fieldName='email' type='text'/>
            <FormField lang={lng} fieldName='password1' type='text'/>
            <FormField lang={lng} fieldName='confirmPassword' type='text'/>
            <button type="submit">Submit</button>
          </Form>
          
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
