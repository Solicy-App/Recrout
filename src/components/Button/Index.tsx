'use client';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from '../../app/i18n/client';
import LoadingButton from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Image from '../image/Image';

type buttonType = {
  title: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  iconName?: string;
};

const Button: FC<buttonType> = ({
  onClick,
  title,
  className,
  disabled,
  isLoading,
  type = 'button',
  iconName,
}): JSX.Element => {
  const [language, setLanguage] = useState<string>('');
  const { t } = useTranslation(language, 'common');
  const win = typeof window != 'undefined';
  useEffect(() => {
    if (win) {
      const checkLanguage = () => {
        const userLanguage = window.location.pathname.split('/')[1];

        if (userLanguage !== '') {
          setLanguage(userLanguage);
        }
      };
      checkLanguage();
    }
  }, [win]);

  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <LoadingButton
      className={className}
      type={type}
      onClick={handleClick}
      disabled={disabled || isLoading}
      startIcon={
        isLoading ? <CircularProgress size={20} color="inherit" /> : null
      }
    >
      {iconName && <Image className="btn-icon" name={iconName} />}
      {t(title)}
    </LoadingButton>
  );
};

export default Button;
