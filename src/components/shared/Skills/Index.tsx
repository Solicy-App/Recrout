import React, { FC } from 'react';
type SkillsType = {
  title: string;
};
const Skills: FC<SkillsType> = ({ title }): JSX.Element => {
  return <span className="tab__content-skill">{title}</span>;
};

export default Skills;
