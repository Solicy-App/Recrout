'use client';
import React, { FC } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import { IMessage } from '@/core/interface/contact';
import { formDataConverter } from '@/helpers/stateToFormData';
import { InputType } from '@/core/enum/inputType';
import { useTranslation } from '@/app/i18n/client';
import FormField from '@/components/FormField/Index';
import { ILanguage } from '@/core/interface/language';
import { initialValues, validation } from './form';
import { ContactService } from '../../../../services/contact/contact';
import './index.scss';

const ContactUs: FC<ILanguage> = ({ params }): JSX.Element => {
  const { t } = useTranslation(params.lng, 'common');
  const handleSubmit = async (
    values: IMessage,
    e: FormikHelpers<IMessage>,
  ): Promise<void> => {
    const contactForm = formDataConverter(values);
    await ContactService.sendMessage(contactForm);
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
          placeholder={t('first_name')}
          type={InputType.text}
        />
        <FormField
          fieldName="email"
          placeholder={t('email')}
          type={InputType.email}
        />
        <FormField
          fieldName="phone"
          placeholder={t('phone')}
          type={InputType.text}
        />
        <FormField
          fieldName="message"
          placeholder={t('message')}
          type={InputType.text}
        />
      </Form>
    </Formik>
  );
};

export default ContactUs;
