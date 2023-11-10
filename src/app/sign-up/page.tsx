'use client';
import React, { BaseSyntheticEvent, useState } from 'react';
import { SignUpType } from '@/core/interface/auth';
import { AuthService } from '../../../services/auth/auth';
import './index.scss';

const SignUp: React.FC = () => {
  const [creds, setCreds] = useState<SignUpType>({
    email: '',
    first_name: '',
    last_name: '',
    password1: '',
    confirmPassword: '',
    terms: true,
    remember_me: false,
  });

  const handleInputChange = (e: BaseSyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setCreds(prevCreds => ({ ...prevCreds, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const signUpForm = Object.keys(creds).reduce((formData, key) => {
      formData.append(key, (creds as any)[key]);
      return formData;
    }, new FormData());
    

    delete creds.confirmPassword;

    await AuthService.signUp(signUpForm);

    setCreds({
      first_name: '',
      last_name: '',
      email: '',
      password1: '',
      remember_me: false,
      terms: false,
      confirmPassword: '',
    });
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
              onChange={handleInputChange}
              value={creds.first_name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Last Name:</label>
            <input
              type="text"
              id="surname"
              name="last_name"
              onChange={handleInputChange}
              value={creds.last_name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
