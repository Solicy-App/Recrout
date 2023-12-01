import React, { FC } from 'react';
import {
  IEducationAndExperience,
  IEducationCategories,
} from '@/core/interface/educationAndExperience';
import ExperienceItem from '../ExperienceItem/Index';

const EducationAndExperience: FC<IEducationAndExperience> = ({
  education,
}): JSX.Element => {
  return (
    <div className="tab__content">
      {education.map((item) => (
        <>
          <div className="tab__content__header">
            <span className="tab__content__header-title">{item.title}</span>
            <span className="tab__content__header-years">{item.years}</span>
          </div>
          <div className="tab__content__desc">
            <span className="tab__content__desc-text">{item.description}</span>
          </div>
          <div className="tab__content__about">
            {item.categories &&
              item.categories.map(
                (item: IEducationCategories, index: number) => (
                  <ExperienceItem
                    key={index}
                    icon={item.icon}
                    title={item.title}
                  />
                ),
              )}
          </div>
        </>
      ))}
    </div>
  );
};

export default EducationAndExperience;
