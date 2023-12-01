import { ISharedImagesAndVideos } from '@/core/interface/sharedImages';
import React, { FC } from 'react';

const SharedVideos: FC<ISharedImagesAndVideos> = ({
  content,
  className,
}): JSX.Element => {
  return (
    <div className="tab__photos__content">
      {content.map((item, index) => (
        <iframe
          key={index}
          className={`tab__photos__content-video ${className ?? ''}`}
          src={item.URL}
        ></iframe>
      ))}
    </div>
  );
};
export default SharedVideos;
