import React, { FC } from 'react';
import ActionButton from '@/components/ActionButton/Index';
import ContentBlock from '@/components/ContentBlock/Index';
import Skills from '@/components/shared/Skills/Index';
import { ISkillsTab } from '@/core/interface/skills';

import './Index.scss';

const SkillsTab: FC<ISkillsTab> = ({ t, skills }): JSX.Element => {
  const handleEdit = (): void => {};
  const handleAdd = (): void => {};

  return (
    <ContentBlock
      className="skills"
      title={t('skills')}
      onActionClick={handleEdit}
      secondButton={<ActionButton onClick={handleAdd} iconName="plus.svg" />}
    >
      <div className="skills__block">
        {skills.map((item, index) => (
          <Skills key={index} title={t(item.title)} />
        ))}
      </div>
    </ContentBlock>
  );
};

export default SkillsTab;
