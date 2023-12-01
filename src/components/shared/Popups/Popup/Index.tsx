import React, { FC } from 'react';
import Image from '@/components/image/Image';

import './Index.scss';
import { Children } from '@/core/interface/popup';

export const Popup: FC<Children> = ({
  title,
  description,
  children,
  onClose,
  className,
}): JSX.Element => {
  const onModalClose = (): void => {
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup__content">
        <div className={`popup__content__main ${className ?? ''}`}>
          <span className="popup__content__main-close" onClick={onModalClose}>
            <Image name="close.svg" width={22} height={22} />
          </span>
          <span className="popup__title">{title}</span>
          {description && <p className="popup__desc">{description}</p>}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
