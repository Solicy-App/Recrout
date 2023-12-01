'use client';
import React, { FC } from 'react';
import Button from '@/components/Button/Index';
import { ILanguage } from '@/core/interface/language';
import { Form, Formik } from 'formik';
import FormField from '@/components/FormField/Index';
import { InputType } from '@/core/enum/inputType';
import { AuthService } from '../../../../services/auth/auth';
import { initialValues, validation } from './form';
import { useTranslation } from '@/app/i18n/client';
import { SignInType } from '@/core/interface/auth';

const SignIn: FC<ILanguage> = ({ params }): JSX.Element => {
  const { t } = useTranslation(params.lng, 'common');
  const handleLinkedinLogin = () => {
    console.log('handle login via linkedin');
  };

  const handleSignIn = async (values: SignInType, actions: any) => {
    const response = await AuthService.signIn(values.email, values.password);
    console.log(response);
  };

  return (
    <div className="login">
      <Button
        type="button"
        onClick={handleLinkedinLogin}
        title="login_with_linkedin"
      />
      <Formik
        initialValues={initialValues}
        validationSchema={validation(t)}
        onSubmit={(values, actions) => handleSignIn(values, actions)}
      >
        <Form>
          <FormField
            fieldName="email"
            type={InputType.email}
            placeholder="email"
          />
          <FormField
            fieldName="password"
            type={InputType.password}
            placeholder="password"
          />
          <Button title='login' type='submit'/>
        </Form>
      </Formik>
    </div>
  );
};

export default SignIn;
