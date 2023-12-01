import { ILevel } from '@/core/interface/level';
import React, { FC, useEffect, useState } from 'react';
import Image from '../image/Image';
import './Index.scss';

const Level: FC<ILevel> = ({
  icon,
  level,
  title,
  isReadonly = true,
  onClick,
}): JSX.Element => {
  const [levelArr, setLevelArr] = useState(new Array(5).fill(0));

  useEffect(() => {
    const updatedLevelArr = new Array(5)
      .fill(0)
      .map((_, index) => (index < level ? 1 : 0));
    setLevelArr(updatedLevelArr);
  }, [level]);

  const handleChange = (index: number): void => {
    const arr = new Array(5).fill(0);
    for (let i = 0; i < index + 1; i++) {
      arr[i] = 1;
    }
    setLevelArr(arr);
    if (onClick) {
      onClick(index + 1);
    }
  };

  return (
    <div className="level">
      <div className="level__icon__title">
        {icon !== undefined && (
          <Image
            className="level__icon__title-icon"
            name={icon}
            width={24}
            height={24}
          />
        )}
        {title && <span className="level__icon__title-title">{title}</span>}
        <div className="dots">
          {levelArr.map((value, index) => (
            <span
              onClick={() => (isReadonly ? undefined : handleChange(index))}
              className={`dot ${value === 1 ? 'marked' : ''}`}
              key={index}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Level;
