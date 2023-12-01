import React, { FC } from 'react';
import { IActionButton } from '@/core/interface/editButton';
import Image from '../image/Image';
import './Index.scss';

const ActionButton: FC<IActionButton> = ({
  onClick,
  className,
  iconName = 'pen.png',
}): JSX.Element => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div onClick={handleClick} className={`edit ${className ?? ''}`}>
      <Image className="edit-img" name={iconName} />
    </div>
  );
};

export default ActionButton;
