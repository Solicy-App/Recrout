import React, { FC } from 'react';
import ContentBlock from '@/components/ContentBlock/Index';
import EducationAndExperience from '@/components/shared/EducationAndExperience/Index';
import {
  educationExperience,
  education,
} from '@/core/constants/educationExperienceTabConstants';
import { certifications } from '@/core/constants/educationAndExperience';
import { ITranslate } from '@/core/interface/translate';

import './Index.scss';

const EducationExperienceTab: FC<ITranslate> = ({ t }): JSX.Element => {
  return (
    <div className="tab experience">
      <div className="tab__top">
        <ContentBlock className="tab__education" title={t('work_experience')}>
          <EducationAndExperience education={educationExperience} />
        </ContentBlock>

        <ContentBlock
          className="tab__education education"
          title={t('education')}
        >
          <EducationAndExperience education={education} />
        </ContentBlock>
      </div>
      <div className="tab__bottom">
        <ContentBlock className="education" title={t('certifications')}>
          <div className="tab__bottom__content">
            <EducationAndExperience education={certifications} />
          </div>
        </ContentBlock>
      </div>
    </div>
  );
};

export default EducationExperienceTab;
