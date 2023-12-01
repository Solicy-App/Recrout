import React, { FC } from 'react';
import { IConfirm } from '@/core/interface/confirmModal';
import Button from '@/components/Button/Index';

import './Index.scss';

const ConfirmPopup: FC<IConfirm> = ({ description, onApprove, onCancel }) => {
  const handleApprovement = () => {
    onApprove();
  };
  const handleDeclime = () => {
    onCancel();
  };

  return (
    <div className="confirm">
      <span className="confirm__desc">{description}</span>
      <div className="confirm__buttons">
        <Button
          title="yes"
          onClick={handleApprovement}
          className="confirm__buttons-btn no"
        />
        <Button
          title="no"
          onClick={handleDeclime}
          className="confirm__buttons-btn yes"
        />
      </div>
    </div>
  );
};

export default ConfirmPopup;
