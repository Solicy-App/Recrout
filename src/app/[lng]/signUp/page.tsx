'use client'
import React from 'react';
import { SignUpType } from '@/core/interface/auth';
import { AuthService } from '../../../../services/auth/auth';
import { formDataConverter } from '@/helpers/stateToFormData';
import { useTranslation } from '../../i18n/client'
import { Formik, Form, FormikHelpers } from 'formik';
import { validation, initialValues } from './form-validation';
import { InputType } from '@/core/enum/inputType';
import FormField from '@/components/FormField/Index';
import Button from '@/components/Button/Index';
import './index.scss';

const SignUp: React.FC<any> = ({ params:{ lng } }) => {
  const { t } = useTranslation(lng, 'common')

  const handleSubmit = async (values: SignUpType, e: FormikHelpers<any>): Promise<void> => {
    
    const signUpForm = formDataConverter(values, 'confirmPassword')
    await AuthService.signUp(signUpForm);
    e.resetForm()
  };

  return (
    <div className="sign-up-page">
      <div className="form-container">
        <h2 className="title">{t('sign_up')}</h2>
        <Formik initialValues={initialValues} validateOnChange={true} validate={(values) => validation(values)} onSubmit={(values, FormEvent) => handleSubmit(values,FormEvent)}>
          <Form>
            <FormField fieldName='first_name' type={InputType.text} placeholder='First name'/>
            <FormField fieldName='last_name' type={InputType.text} placeholder='Last name'/>
            <FormField fieldName='email' type={InputType.email} placeholder='Email'/>
            <FormField fieldName='password1' type={InputType.password} placeholder='Password'/>
            <FormField fieldName='confirmPassword' type={InputType.password} placeholder='Confirm password'/>
            <Button lang={lng} title='sign_up' type='submit' className='submit-button'/>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
