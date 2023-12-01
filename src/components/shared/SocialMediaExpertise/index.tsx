import React, { FC } from 'react';
import Level from '@/components/Level/Index';
import { ISocialMedia } from '@/core/interface/socialMedia';

const SocialMediaExpertise: FC<ISocialMedia> = ({ socialMedia }): JSX.Element => {
  return (
    <>
      {socialMedia.map((item, index) => (
        <Level
          key={index}
          title={item.title}
          level={item.level}
          icon={item.icon}
        />
      ))}
    </>
  );
};

export default SocialMediaExpertise;
