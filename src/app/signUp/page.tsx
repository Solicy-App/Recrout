'use client';
import React, { ChangeEvent, useState } from 'react';
import { SignUpType } from '@/core/interface/auth';
import { AuthService } from '../../../services/auth/auth';
import { resetForm } from '@/utils/reset-form';
import './index.scss';
import { handleInputChange } from '@/helpers/inputHandler';
import { formDataConverter } from '@/helpers/stateToFormData';

const SignUp: React.FC = () => {
  const [creds, setCreds] = useState<SignUpType>({
    email: '',
    first_name: '',
    last_name: '',
    password1: '',
    confirmPassword: '',
    terms: false,
    remember_me: false,
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    handleInputChange(e, setCreds)
};

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const signUpForm = formDataConverter(creds, 'confirmPassword')
    await AuthService.signUp(signUpForm);
    setCreds({...resetForm(creds)})
  };

  return (
    <div className="sign-up-page">
      <div className="form-container">
        <h2 className="title">Sign Up</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name">First Name:</label>
            <input
              type="text"
              id="name"
              name="first_name"
              onChange={handleInput}
              value={creds.first_name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Last Name:</label>
            <input
              type="text"
              id="surname"
              name="last_name"
              onChange={handleInput}
              value={creds.last_name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInput}
              value={creds.email}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password1"
              onChange={handleInput}
              value={creds.password1}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleInput}
              value={creds.confirmPassword}
              required
            />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="submit-button"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
