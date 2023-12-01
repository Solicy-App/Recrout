import React, { FC } from 'react';
import { IContentBlock } from '@/core/interface/contentBlock';
import ActionButton from '../ActionButton/Index';
import './Index.scss';

const ContentBlock: FC<IContentBlock> = ({
  onActionClick,
  title,
  children,
  className,
  buttonIcon,
  showButton = true,
  secondButton,
}): JSX.Element => {
  const handleAction = (): void => {
    if (onActionClick) {
      onActionClick();
    }
  };

  return (
    <div className={`block ${className}`}>
      <div className="block__header">
        <span className="block__header-title">{title}</span>
        <div className="buttons">
          {secondButton}
          {showButton && (
            <ActionButton iconName={buttonIcon} onClick={handleAction} />
          )}
        </div>
      </div>
      <div className="block__content">{children}</div>
    </div>
  );
};

export default ContentBlock;
