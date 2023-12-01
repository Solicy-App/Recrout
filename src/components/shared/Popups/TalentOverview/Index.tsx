'use client';

import React, { FC, useState } from 'react';
import TalentOverviewBar from '../../TalentOverviewBar/Index';
import { bars } from '@/core/constants/talentOverviewPopupConstants';
import { ITalentOverviewBar } from '@/core/interface/talentOverviewBar';

import './Index.scss';

const TalentOverviewPopup: FC = (): JSX.Element => {
  const [overview, setOverview] = useState<ITalentOverviewBar[]>(bars);

  return (
    <div className="overview">
      <div className="overview__bar">
        {overview.map((item, index) => (
          <TalentOverviewBar
            key={index}
            label={item.label}
            from={item.from}
            value={item.value}
          />
        ))}
      </div>
    </div>
  );
};

export default TalentOverviewPopup;
