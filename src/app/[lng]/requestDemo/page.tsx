'use client';
import { FC } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import { IRequestDemo } from '@/core/interface/requestDemo';
import { RequestDemoService } from '../../../../services/requestDemo/requestDemo';
import { formDataConverter } from '@/helpers/stateToFormData';
import { validation, initialValues } from './form';
import { InputType } from '@/core/enum/inputType';
import FormField from '@/components/FormField/Index';
import Button from '@/components/Button/Index';
import './index.scss';

const RequestDemo: FC<any> = ({ params: { lng } }): JSX.Element => {
  const handleSubmit = async (
    values: IRequestDemo,
    e: FormikHelpers<any>,
  ): Promise<void> => {
    const formData = formDataConverter(values);
    await RequestDemoService.requestDemo(formData);
    e.resetForm();
  };

  return <Formik
      className="request"
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={(values, FormEvent) => handleSubmit(values, FormEvent)}
    >
      <Form>
        <FormField fieldName="name" type={InputType.text} placeholder="Name" />
        <FormField
          fieldName="email"
          type={InputType.email}
          placeholder="Email"
        />
        <FormField
          fieldName="phone"
          type={InputType.text}
          placeholder="Phone"
        />
        <Button
          lang={lng}
          title="sign_up"
          type="submit"
          className="submit-button"
        />
      </Form>
    </Formik>
};

export default RequestDemo;
