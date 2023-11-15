'use client';
import { Form, Formik, FormikHelpers } from 'formik';
import { NextPage } from 'next';
import { IMessage } from '@/core/interface/contact';
import { formDataConverter } from '@/helpers/stateToFormData';
import { ContactService } from '../../../../services/contact/contact';
import { initialValues, validation } from './form';
import './index.scss';
import FormField from '@/components/FormField/Index';
import { InputType } from '@/core/enum/inputType';

const ContactUs: NextPage = (): JSX.Element => {

  const handleSubmit = async (values: IMessage, e: FormikHelpers<any>): Promise<void> => {
    const contactForm = formDataConverter(values)
    await ContactService.sendMessage(contactForm);
    e.resetForm()
  };

  return (
      <Formik initialValues={initialValues} validationSchema={validation} onSubmit={(values, FormEvent) => handleSubmit(values,FormEvent)}>
        <Form>
          <FormField fieldName='name' placeholder='name' type={InputType.text}/>
          <FormField fieldName='email' placeholder='email' type={InputType.email}/>
          <FormField fieldName='phone' placeholder='phone' type={InputType.text}/>
          <FormField fieldName='message' placeholder='message' type={InputType.text}/>
        </Form>
      </Formik>
  );
};

export default ContactUs;
