import React, { FC } from 'react';
import { IPreferences } from '@/core/interface/preferences';

const Preferences: FC<IPreferences> = ({ preferences }): JSX.Element => {
  return (
    <>
      {preferences.map((item, index) => (
        <div key={index} className="tab__pref__item">
          <span className="tab__pref__item-title">{item.title}</span>
          <span className="tab__pref__item-value">{item.value}</span>
        </div>
      ))}
    </>
  );
};

export default Preferences;
