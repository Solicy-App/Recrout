'use client';
import React, { useEffect, useState } from 'react';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const signUpForm = new FormData();
    delete creds.confirmPassword;
    Object.entries(creds).forEach(([key, value]) => {
      signUpForm.append(key, value);
    });
    AuthService.signUp(signUpForm)
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
              value={creds.first_name}
              onChange={e =>
                setCreds(prevCreds => ({ ...prevCreds, first_name: e.target.value }))
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Last Name:</label>
            <input
              type="text"
              id="surname"
              value={creds.last_name}
              onChange={e =>
                setCreds(prevCreds => ({ ...prevCreds, last_name: e.target.value }))
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={creds.email}
              onChange={e =>
                setCreds(prevCreds => ({ ...prevCreds, email: e.target.value }))
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={creds.password1}
              onChange={e =>
                setCreds(prevCreds => ({ ...prevCreds, password1: e.target.value }))
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={creds.confirmPassword}
              onChange={e =>
                setCreds(prevCreds => ({ ...prevCreds, confirmPassword: e.target.value }))
              }
              required
            />
          </div>
          <button onClick={handleSubmit} type="submit" className="submit-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
