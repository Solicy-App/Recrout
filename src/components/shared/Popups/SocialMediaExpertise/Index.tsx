import React, { FC } from 'react';
import Image from '@/components/image/Image';
import Level from '@/components/Level/Index';
import DropDown from '@/components/Dropdown';
import Button from '@/components/Button/Index';
import { socialNetwork } from '@/core/constants/aboutMePopUpConstants';
import { SocialMediaExpertiseType, SocialMediaType } from '@/core/interface/socialMediaExpertise';

import './Index.scss';

const SocialMediaExpertisePopup: FC<SocialMediaExpertiseType> = ({
  socialMedias,
}): JSX.Element => {
  const handleDelete = (id: number) => {};
  const handleProfiency = (item: SocialMediaType) => {};
  const handleNewProfiency = (value: number) => {};
  const handleDropdown = (value: string) => {};

  return (
    <div className="medias">
      <div className="medias_existing">
        {socialMedias.map((item, index) => (
          <div key={index} className="medias_existing__media">
            <div className="medias_existing__media__left">
              <span className="medias_existing__media__left-label">
                Social network
              </span>
              <div className="medias_existing__media__left-social">
                {item.network}
              </div>
            </div>
            <div className="medias_existing__media__middle">
              <span className="medias_existing__media__middle-label">
                Proficiency
              </span>
              <Level
                isReadonly={false}
                level={item.proficiency}
                onClick={() => handleProfiency(item)}
              />
            </div>
            <span
              onClick={() => handleDelete(item.id)}
              className="medias_existing-trash"
            >
              <Image name="trash.svg" width={16} height={16} />
            </span>
          </div>
        ))}
      </div>
      <div className="medias__add">
        <span className="medias__add-title">Add new social network</span>
        <div className="cont">
          <div className="left">
            <span className="medias_existing__media__middle-label">
              Social network
            </span>
            <DropDown
              className="social_dropdown"
              items={socialNetwork}
              selectedValue={e => handleDropdown(e)}
            />
          </div>
          <div className="right">
            <span className="medias_existing__media__middle-label">
              Proficiency
            </span>
            <Level
              isReadonly={false}
              level={0}
              onClick={e => handleNewProfiency(e)}
            />
          </div>
        </div>
      </div>
      <Button className="save-btn" title="save" />
    </div>
  );
};

export default SocialMediaExpertisePopup;
