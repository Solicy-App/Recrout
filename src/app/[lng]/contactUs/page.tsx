'use client';
import { Form, Formik, FormikHelpers } from 'formik';
import { NextPage } from 'next';
import { IMessage } from '@/core/interface/contact';
import { formDataConverter } from '@/helpers/stateToFormData';
import { ContactService } from '../../../../services/contact/contact';
import { initialValues, validation } from './form';
import { InputType } from '@/core/enum/inputType';
import { useTranslation } from '@/app/i18n/client';
import FormField from '@/components/FormField/Index';
import './index.scss';

const ContactUs: NextPage<any> = ({params:{lng}}): JSX.Element => {
  const { t } = useTranslation(lng, 'common')
  const handleSubmit = async (values: IMessage, e: FormikHelpers<any>): Promise<void> => {
    const contactForm = formDataConverter(values)
    await ContactService.sendMessage(contactForm);
    e.resetForm()
  };

  return (
      <Formik initialValues={initialValues} validationSchema={validation(t)} onSubmit={(values, FormEvent) => handleSubmit(values,FormEvent)}>
        <Form>
          <FormField fieldName='name' placeholder={t('first_name')} type={InputType.text}/>
          <FormField fieldName='email' placeholder={t('email')} type={InputType.email}/>
          <FormField fieldName='phone' placeholder={t('phone')} type={InputType.text}/>
          <FormField fieldName='message' placeholder={t('message')} type={InputType.text}/>
        </Form>
      </Formik>
  );
};

export default ContactUs;
