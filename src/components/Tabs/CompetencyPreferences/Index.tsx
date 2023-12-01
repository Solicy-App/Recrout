'use client';

import React, { FC, useState } from 'react';
import ContentBlock from '@/components/ContentBlock/Index';
import Preferences from '@/components/shared/Preferences/Index';
import CompetencyScores from '@/components/shared/competencyScores/Index';
import { ITranslate } from '@/core/interface/translate';
import {
  chartData,
  competencyScores,
  competencyYears,
  preferences,
} from '@/core/constants/competencyTabConstants';
import Popup from '@/components/shared/Popups/Popup/Index';
// import PreferencesPopup from '@/components/shared/Popups/Preferences/Index';

import './Index.scss';

const CompenecyPreferencesTab: FC<ITranslate> = ({ t }): JSX.Element => {
  const [showPreference, setShowPreference] = useState<boolean>(false);

  const editPreference = (): void => {
    setShowPreference(true);
  };
  const handleClose = (): void => {
    setShowPreference(false);
  };

  return (
    <div className="tab">
      <ContentBlock
        title={t('preferences')}
        className="tab__pref"
        onActionClick={editPreference}
      >
        <Preferences preferences={preferences} />
      </ContentBlock>
      <ContentBlock
        className="tab__comp"
        title={t('competency_scores')}
        showButton={false}
      >
        <CompetencyScores
          chartData={chartData}
          competencyScores={competencyScores}
          competencyYears={competencyYears}
          height={300}
          width={300}
        />
      </ContentBlock>
      {/* {showPreference && (
        <Popup title="Preferences" onClose={handleClose}>
          <PreferencesPopup t={t} />
        </Popup>
      )} */}
    </div>
  );
};

export default CompenecyPreferencesTab;
