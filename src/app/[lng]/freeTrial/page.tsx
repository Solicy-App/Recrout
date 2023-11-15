'use client';
import { NextPage } from 'next';
import { Form, Formik, FormikHelpers } from 'formik';
import { IFreeTrialBody } from '@/core/interface/freeTrial';
import { formDataConverter } from '@/helpers/stateToFormData';
import { FreeTrialService } from '../../../../services/freeTrial/freeTrial';
import { initialValues, validation } from './form';
import FormField from '@/components/FormField/Index';
import { InputType } from '@/core/enum/inputType';
import { useTranslation } from '../../i18n/client';
import './index.scss';

const FreeTrial: NextPage<any> = ({ params:{lng} }): JSX.Element => {
  const { t } = useTranslation(lng,'common')

  const handleSubmit = async (values: IFreeTrialBody, e: FormikHelpers<any>): Promise<void> => {
    const formData = formDataConverter(
      values,
      !values.voucher ? 'voucher' : '',
    );
    await FreeTrialService.startFreeTrial(formData);
    e.resetForm()
  };

  return (
    <Formik validationSchema={validation} initialValues={initialValues} onSubmit={(values, FormEvent) => handleSubmit(values,FormEvent)}>
      <Form>
        <FormField fieldName='company_name' type={InputType.text} placeholder={t('company_name')} />
        <FormField fieldName='email' type={InputType.email} placeholder={t('email')} />
        <FormField fieldName='full_name' type={InputType.text} placeholder={t('full_name')} />
        <FormField fieldName='website' type={InputType.text} placeholder={t('website')} />
        <FormField fieldName='voucher' type={InputType.text} placeholder={t('voucher')} />
      </Form>
    </Formik>
  );
};

export default FreeTrial;
