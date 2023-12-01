import React, { FC } from 'react';
import Image from '../image/Image';
import { IProfileImage } from '@/core/interface/profileImage';
import './index.scss';

const ProfileImage: FC<IProfileImage> = ({
  className,
  height,
  name,
  url,
  width,
  notificationCount,
}): JSX.Element => {
  return (
    <div className="profile">
      <span className="profile__dot">
        <span className="profile__dot-count">
          {notificationCount && notificationCount > 1 ? notificationCount : ''}
        </span>
      </span>

      <Image
        className={className}
        height={height}
        name={name ?? url}
        width={width}
      />
    </div>
  );
};

export default ProfileImage;
