import React, { FC } from 'react';
import { INotificationCard } from '@/core/interface/notificationCard';
import ProfileImage from '../ProfileImage';
import './Index.scss';

const NotificationCard: FC<INotificationCard> = ({
  image,
  message,
  senderName,
  time,
}): JSX.Element => {
  return (
    <div className="card">
      <ProfileImage width={45} height={45} notificationCount={1} name={image} />
      <div className="card__right">
        <span className="card__right-sender">{senderName}</span>
        <span className="card__right-message">{message}</span>
        <span className="card__right-date">{time}</span>
      </div>
    </div>
  );
};

export default NotificationCard;
