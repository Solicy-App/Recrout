'use client';
import { NextPage } from 'next';
import { useState, ChangeEvent } from 'react';
import { IRequestDemo } from '@/core/interface/requestDemo';
import { handleInputChange } from '@/helpers/inputHandler';
import { RequestDemoService } from '../../../../services/requestDemo/requestDemo';
import { formDataConverter } from '@/helpers/stateToFormData';
import { resetForm } from '@/utils/reset-form';
import './index.scss';

const RequestDemo: NextPage = (): JSX.Element => {
  const [request, setRequest] = useState<IRequestDemo>({
    email: '',
    name: '',
    phone: '',
  });

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const formData = formDataConverter(request);
    await RequestDemoService.requestDemo(formData);
    resetForm(request);
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    handleInputChange(e, setRequest);
  };

  return (
    <form className="request" onSubmit={handleSubmit}>
      <input
        placeholder="name"
        name="name"
        type="text"
        onChange={handleInput}
      />
      <input
        placeholder="email"
        name="email"
        type="email"
        onChange={handleInput}
      />
      <input
        placeholder="phone"
        name="phone"
        type="text"
        onChange={handleInput}
      />
      <button>Submit</button>
    </form>
  );
};

export default RequestDemo;
