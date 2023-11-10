'use client';

import { IMessage } from '@/core/interface/contact';
import { NextPage } from 'next';
import { BaseSyntheticEvent, useState } from 'react';
import { ContactService } from '../../../services/contact/contact';
import { resetForm } from '@/utils/reset-form';
import './index.scss'
const ContactUs: NextPage = (): JSX.Element => {
  const [contact, setContact] = useState<IMessage>({
    email: '',
    message: '',
    name: '',
    phone: '',
  });

  const handleInputChange = (e: BaseSyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setContact(prevValues => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const contactForm = Object.keys(contact).reduce((formData, key) => {
      if (key !== 'confirmPassword') {
        formData.append(key, (contact as any)[key]);
      }
      return formData;
    }, new FormData());
    await ContactService.sendMessage(contactForm);
    setContact({ ...resetForm(contact) });
  };

  return (
    <form className='contact' onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="name"
        onChange={handleInputChange}
        value={contact.name}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="email"
        onChange={handleInputChange}
        value={contact.email}
      />
      <label htmlFor="phone">Phone:</label>
      <input
        type="phone"
        id="phone"
        name="phone"
        placeholder="phone"
        onChange={handleInputChange}
        value={contact.phone}
      />
            <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        placeholder="message"
        onChange={handleInputChange}
        value={contact.message}
      />
      <button onClick={handleSubmit} type="submit" className="submit-button">
        Contact us
      </button>
    </form>
  );
};

export default ContactUs;
