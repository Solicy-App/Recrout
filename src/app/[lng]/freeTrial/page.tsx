'use client';
import React, { FC } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import { IFreeTrialBody } from '@/core/interface/freeTrial';
import { formDataConverter } from '@/helpers/stateToFormData';
import FormField from '@/components/FormField/Index';
import { InputType } from '@/core/enum/inputType';
import { ILanguage } from '@/core/interface/language';
import { initialValues, validation } from './form';
import { useTranslation } from '../../i18n/client';
import { FreeTrialService } from '../../../../services/freeTrial/freeTrial';
import './index.scss';

const FreeTrial: FC<ILanguage> = ({ params }): JSX.Element => {
  const { t } = useTranslation(params.lng, 'common');

  const handleSubmit = async (
    values: IFreeTrialBody,
    e: FormikHelpers<IFreeTrialBody>,
  ): Promise<void> => {
    const formData = formDataConverter(
      values,
      !values.voucher ? 'voucher' : '',
    );
    await FreeTrialService.startFreeTrial(formData);
    e.resetForm();
  };

  return (
    <Formik
      validationSchema={validation}
      initialValues={initialValues}
      onSubmit={(values, FormEvent) => handleSubmit(values, FormEvent)}
    >
      <Form>
        <FormField
          fieldName="company_name"
          type={InputType.text}
          placeholder={t('company_name')}
        />
        <FormField
          fieldName="email"
          type={InputType.email}
          placeholder={t('email')}
        />
        <FormField
          fieldName="full_name"
          type={InputType.text}
          placeholder={t('full_name')}
        />
        <FormField
          fieldName="website"
          type={InputType.text}
          placeholder={t('website')}
        />
        <FormField
          fieldName="voucher"
          type={InputType.text}
          placeholder={t('voucher')}
        />
      </Form>
    </Formik>
  );
};

export default FreeTrial;
