import { FC, SyntheticEvent } from 'react';
import { useTranslation } from '../../app/i18n/client';
import { CircularProgress } from '@mui/material';
import './Index.scss';

type buttonType = {
  title: string;
  onClick: (event?: any) => void;
  lang: string;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
};

const Button: FC<buttonType> = ({
  onClick,
  title,
  className,
  disabled,
  lang,
  isLoading
}): JSX.Element => {
  const { t } = useTranslation(lang, 'common');
  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button
      disabled={disabled}
      className={`${className} btn`}
      onClick={handleClick}
    >
      <span className="content">
        {t(title)}
        {isLoading && <CircularProgress className="circle" />}
      </span>
    </button>
  );
};

export default Button;
