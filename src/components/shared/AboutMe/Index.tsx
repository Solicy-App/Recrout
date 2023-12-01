import Image from '@/components/image/Image';
import React, { FC } from 'react';
import { IAboutMeContent } from '@/core/interface/aboutMe';

const AboutMeContent: FC<IAboutMeContent> = ({
  name,
  about,
  aboutMe,
}): JSX.Element => {
  return (
    <div>
      <div className="about__left__info">
        <span className="about__left__info-name">{name}</span>
        <span className="about__left__info-desc">{about}</span>
      </div>
      <div className="about__left__more">
        {aboutMe.map((item, index) => (
          <div key={index} className="about__left__more__item">
            <span className="about__left__more__item-icon">
              <Image
                name={item.icon}
                width={item.iconSize}
                height={item.iconSize}
              />
            </span>
            <span className="about__left__more__item-value">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMeContent;
