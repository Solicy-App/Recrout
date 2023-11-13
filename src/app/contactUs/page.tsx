'use client';

import { IMessage } from '@/core/interface/contact';
import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import { ContactService } from '../../../services/contact/contact';
import { resetForm } from '@/utils/reset-form';
import { handleInputChange } from '@/helpers/inputHandler';
import { formDataConverter } from '@/helpers/stateToFormData';
import './index.scss';

const ContactUs: NextPage = (): JSX.Element => {
  const [contact, setContact] = useState<IMessage>({
    email: '',
    message: '',
    name: '',
    phone: '',
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    handleInputChange(e, setContact);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const contactForm = formDataConverter(contact)
    await ContactService.sendMessage(contactForm);
    setContact({ ...resetForm(contact) });
  };

  return (

      <form className="contact" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          onChange={handleInput}
          value={contact.name}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          onChange={handleInput}
          value={contact.email}
        />
        <label htmlFor="phone">Phone:</label>
        <input
          type="phone"
          id="phone"
          name="phone"
          placeholder="phone"
          onChange={handleInput}
          value={contact.phone}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="message"
          onChange={handleInput}
          value={contact.message}
        />
        <button onClick={handleSubmit} type="submit" className="submit-button">
          Contact us
        </button>
      </form>
  );
};

export default ContactUs;
