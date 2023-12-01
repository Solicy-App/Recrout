import React, { FC } from 'react';
import { ISharedImagesAndVideos } from '@/core/interface/sharedImages';

import './Index.scss';

const SharedImages: FC<ISharedImagesAndVideos> = ({
  content,
  className,
}): JSX.Element => {
  return (
    <div className="tab__photos__content">
      {content.map((item, index) => (
        <img
          key={index}
          className={`tab__photos__content-photo ${className ?? ''}`}
          src={item.URL}
          alt={item.URL}
        />
      ))}
    </div>
  );
};

export default SharedImages;
