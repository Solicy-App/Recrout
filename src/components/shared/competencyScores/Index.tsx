'use client';
import React, { FC, useState } from 'react';
import ChartComponent from '@/components/RadarChart/Index';
import { ICompetencyScores } from '@/core/interface/competencyScores';
import ActionButton from '@/components/ActionButton/Index';
import Popup from '../Popups/Popup/Index';
import TalentOverviewPopup from '../Popups/TalentOverview/Index';

const CompetencyScores: FC<ICompetencyScores> = ({
  chartData,
  competencyScores,
  competencyYears,
  width,
  height,
}): JSX.Element => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleOpenOverview = (): void => {
    setShowPopup(true);
  };
  const handleClose = (): void => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="tab__comp__head">
        {competencyYears.map((item, index) => (
          <div
            key={index}
            className={`tab__comp__head__title ${
              item.isActive ? 'active' : ''
            }`}
          >
            <span className="tab__comp__head__title-title">{item.title}</span>
            <span className="tab__comp__head__title-line"></span>
          </div>
        ))}
      </div>
      <div className="tab__comp__tab">
        <div className="tab__comp__tab__left">
          <div className="tab__comp__tab__left__options">
            {competencyScores.map((item, index) => (
              <div
                key={index}
                className="tab__comp__tab__left__options__option"
              >
                <span className="tab__comp__tab__left__options__option-dot"></span>
                <span
                  className={`tab__comp__tab__left__options__option-title ${
                    item.isActive ? 'active' : ''
                  }`}
                >
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="tab__comp__tab__right">
          <ActionButton onClick={handleOpenOverview} iconName="lupa.svg" />
          <ChartComponent width={width} height={height} data={chartData} />
        </div>
      </div>
      {showPopup && (
        <Popup
          className="overview-popup"
          title="Talent overview -2019"
          description="These are your competencies and talents. Please note that a low score does not have to be a
        bad score. It often means that this talent is compensated by other positive talents."
          onClose={handleClose}
        >
          <TalentOverviewPopup />
        </Popup>
      )}
    </>
  );
};

export default CompetencyScores;
