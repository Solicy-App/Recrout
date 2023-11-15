import { FC, SyntheticEvent } from 'react';
import { useTranslation } from '../../app/i18n/client';
import { CircularProgress } from '@mui/material';
import './Index.scss';

type buttonType = {
  title: string;
  onClick?: (event?: any) => void;
  lang: string;
  type: "button" | "submit" | "reset" | undefined;
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
  isLoading,
  type
}): JSX.Element => {
  const { t } = useTranslation(lang, 'common');
  const handleClick = () => {
    if (onClick) onClick();
    
  };

  return (
    <button
      type={type}
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
