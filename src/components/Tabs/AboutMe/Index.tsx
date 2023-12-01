import React, { FC, useState } from 'react';
import ContentBlock from '@/components/ContentBlock/Index';
import AboutMeContent from '@/components/shared/AboutMe/Index';
import AboutAndShare from '@/components/shared/AboutAndShare/Index';
import ExtraActivities from '@/components/shared/ExtraActivities';
import SocialMediaExpertise from '@/components/shared/SocialMediaExpertise';
import { ITranslate } from '@/core/interface/translate';
import {
  aboutUser,
  extraActivities,
  socialMedia,
} from '@/core/constants/aboutTabConstants';
import AboutMePopUp from '@/components/shared/Popups/AboutMe/Index';
import Popup from '@/components/shared/Popups/Popup/Index';
import SocialMediaExpertisePopup from '@/components/shared/Popups/SocialMediaExpertise/Index';
import { socialMdedias } from '@/core/constants/socialMediaConstants';
// import ExtraActivitiesPopup from '@/components/shared/Popups/ExtraActivities/Index';

import './Index.scss';

const AboutMeTab: FC<ITranslate> = ({ t }): JSX.Element => {
  const [showAboutMePopup, setShowAboutMePopup] = useState<boolean>(false);
  const [showExpertisePopup, setShowExpertisePopup] = useState<boolean>(false);
  const [showExtraActivitiesPopup, setShowExtraActivitiesPopup] =
    useState<boolean>(false);

  const handleEditAboutMe = () => {
    setShowAboutMePopup(true);
  };

  const handleExtraActivitiesEdit = () => {
    setShowExtraActivitiesPopup(true);
  };

  const handleSocialMediaEdit = () => {
    setShowExpertisePopup(true);
  };

  const onClose = () => {
    setShowAboutMePopup(false);
    setShowExpertisePopup(false);
    setShowExtraActivitiesPopup(false);
  };

  return (
    <div className="about">
      <ContentBlock
        className="about__left"
        title={t('about_me')}
        onActionClick={handleEditAboutMe}
      >
        <AboutMeContent name="Alan" about="desc" aboutMe={aboutUser} />
      </ContentBlock>

      <div className="about__right">
        <ContentBlock
          showButton={false}
          title="Jouw kaartje om te delen"
          className="about__right__top"
        >
          <AboutAndShare description="desc" t={t} />
        </ContentBlock>

        <div className="about__right__bottom">
          <ContentBlock
            className="about__right__bottom__left"
            title={t('extra_activities')}
            onActionClick={handleExtraActivitiesEdit}
          >
            <ExtraActivities activities={extraActivities} />
          </ContentBlock>
          <ContentBlock
            className="about__right__bottom__right"
            title={t('social_media_expertise')}
            onActionClick={handleSocialMediaEdit}
          >
            <SocialMediaExpertise socialMedia={socialMedia} />
          </ContentBlock>
        </div>
      </div>
      {showAboutMePopup && (
        <Popup onClose={onClose} title="About me">
          <AboutMePopUp t={t} />
        </Popup>
      )}
      {showExpertisePopup && (
        <Popup
          className="expertise"
          onClose={onClose}
          title="Social media expertise"
        >
          <SocialMediaExpertisePopup socialMedias={socialMdedias} />
        </Popup>
      )}
      {/* {showExtraActivitiesPopup && (
        <Popup className="extra" title="Extra activities" onClose={onClose}>
          <ExtraActivitiesPopup t={t} />
        </Popup>
      )} */}
      {/* <Popup className='confirm' title='Are you sure?' onClose={onClose}>
        <ConfirmPopup description='Do you really want to delete this? De vacature?' onApprove={() => {}} onCancel={() => {}}/>
      </Popup> */}
    </div>
  );
};

export default AboutMeTab;
