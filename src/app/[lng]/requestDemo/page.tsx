'use client';
import React, { FC } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import { IRequestDemo } from '@/core/interface/requestDemo';
import { RequestDemoService } from '../../../../services/requestDemo/requestDemo';
import { formDataConverter } from '@/helpers/stateToFormData';
import { validation, initialValues } from './form';
import { InputType } from '@/core/enum/inputType';
import { useTranslation } from '@/app/i18n/client';
import FormField from '@/components/FormField/Index';
import Button from '@/components/Button/Index';
import { ILanguage } from '@/core/interface/language';
import './index.scss';

const RequestDemo: FC<ILanguage> = ({ params }): JSX.Element => {
  const { t } = useTranslation(params.lng, 'common');

  const handleSubmit = async (
    values: IRequestDemo,
    e: FormikHelpers<IRequestDemo>,
  ): Promise<void> => {
    const formData = formDataConverter(values);
    await RequestDemoService.requestDemo(formData);
    e.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation(t)}
      onSubmit={(values, FormEvent) => handleSubmit(values, FormEvent)}
    >
      <Form>
        <FormField
          fieldName="name"
          type={InputType.text}
          placeholder={t('name')}
        />
        <FormField
          fieldName="email"
          type={InputType.email}
          placeholder={t('email')}
        />
        <FormField
          fieldName="phone"
          type={InputType.text}
          placeholder={t('phone')}
        />
        <Button title="sign_up" type="submit" className="submit-button"/>
      </Form>
    </Formik>
  );
};

export default RequestDemo;
