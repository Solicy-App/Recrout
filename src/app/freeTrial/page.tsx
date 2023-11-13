'use client';
import { NextPage } from 'next';
import { useState, ChangeEvent } from 'react';
import { IFreeTrialBody } from '@/core/interface/freeTrial';
import { handleInputChange } from '@/helpers/inputHandler';
import { formDataConverter } from '@/helpers/stateToFormData';
import { resetForm } from '@/utils/reset-form';
import { FreeTrialService } from '../../../services/freeTrial/freeTrial';
import './index.scss';

const FreeTrial: NextPage = (): JSX.Element => {
  const [trialForm, setTrialForm] = useState<IFreeTrialBody>({
    company_name: '',
    email: '',
    full_name: '',
    website: '',
    voucher: '',
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    handleInputChange(e, setTrialForm);
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const formData = formDataConverter(
      trialForm,
      !trialForm.voucher ? 'voucher' : '',
    );
    await FreeTrialService.startFreeTrial(formData);
    resetForm(trialForm);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="company_name"
        placeholder="Company name"
        onChange={handleInput}
        value={trialForm.company_name}
      />
      <input
        type="text"
        name="website"
        placeholder="Website"
        onChange={handleInput}
        value={trialForm.website}
      />
      <input
        type="text"
        name="full_name"
        placeholder="Full name"
        onChange={handleInput}
        value={trialForm.full_name}
      />
      <input
        type="text"
        name="voucher"
        placeholder="Voucher"
        onChange={handleInput}
        value={trialForm.voucher}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleInput}
        value={trialForm.email}
      />
      <button>Submit</button>
    </form>
  );
};

export default FreeTrial;
