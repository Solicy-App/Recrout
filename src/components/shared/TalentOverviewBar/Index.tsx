import React, { FC } from 'react';
import { ITalentOverviewBar } from '@/core/interface/talentOverviewBar';

import './Index.scss';

const TalentOverviewBar: FC<ITalentOverviewBar> = ({
  label,
  value,
  from,
}): JSX.Element => {
  return (
    <div className="bar">
      <span className="bar__label">{label}</span>
      <div className="bar__line">
        <div
          style={{ width: `${Math.floor(value)}0%` }}
          className="bar__line-progress"
        >
          {value}/{from}
        </div>
      </div>
    </div>
  );
};

export default TalentOverviewBar;
