import { IExtraActivities } from '@/core/interface/extraActivities';
import React, { FC } from 'react';

const ExtraActivities: FC<IExtraActivities> = ({ activities }): JSX.Element => {
  return (
    <>
      {activities.map((item, index) => (
        <div key={index} className="about__right__bottom__left__info">
          <div className="about__right__bottom__left__info__header">
            <span className="about__right__bottom__left__info__header-title">
              {item.title}
            </span>
            <span className="about__right__bottom__left__info__header-year">
              {item.years}
            </span>
          </div>
          <span className="about__right__bottom__left__info-desc">
            {item.description}
          </span>
        </div>
      ))}
    </>
  );
};

export default ExtraActivities;
