'use client';
import React, { FC, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Image from '@/components/image/Image';
import DropDown from '@/components/Dropdown';
import Button from '@/components/Button/Index';
import AboutMeTab from '@/components/Tabs/AboutMe/Index';
import { useTranslation } from '@/app/i18n/client';
import { IDropDownItem } from '@/core/interface/dropDown';
import { ILanguage } from '@/core/interface/language';
import CompenecyPreferencesTab from '@/components/Tabs/CompetencyPreferences/Index';
import SkillsTab from '@/components/Tabs/Skills/Index';
import { skills } from '@/core/constants/skillsTabConstants';
import ImageAndYoutubeTab from '@/components/Tabs/ImageAndYoutube/Index';
import EducationExperienceTab from '@/components/Tabs/EducationAndExperience/Index';
import { headerItems } from '@/core/constants/header';
import { IHeaderItems } from '@/core/interface/headerItems';
import { DashboardTabEnum } from '@/core/enum/dashboardTab';
import { AuthService } from '../../../../services/auth/auth';
import { formDataConverter } from '@/helpers/stateToFormData';
import Popup from '@/components/shared/Popups/Popup/Index';
import AvatarPopup from '@/components/shared/Popups/Avatar/Index';
import './index.scss';

const Dashboard: FC<ILanguage> = ({ params }): JSX.Element => {
  const { t } = useTranslation(params.lng, 'common');
  const [showAvatarPopup, setShowAvatarPopup] = useState<boolean>(false);
  const [tabHeader, setTabHeader] = useState<IHeaderItems[]>(headerItems);
  const [tabName, setTabName] = useState<string>(DashboardTabEnum.ABOUT_ME);
  const dropDownItems: IDropDownItem[] = [
    { value: t('company'), to_show: t('company') },
    { value: t('teaser'), to_show: t('teaser') },
  ];

  const handleDropdownChange = (event: string | number): void => {
    console.log(event, '----------');
  };

  const handleClosePopup = (): void => {
    setShowAvatarPopup(false);
  };

  const handleOpenPopup = (): void => {
    setShowAvatarPopup(true);
  };

  const handleTabChange = (clickedItem: IHeaderItems): void => {
    setTabHeader(prevValues =>
      prevValues.map(item =>
        item === clickedItem
          ? { ...item, isActive: true }
          : { ...item, isActive: false },
      ),
    );
    console.log(clickedItem);
    setTabName(clickedItem.value);
  };

  const signUp = async (): Promise<any> => {
    const form = formDataConverter({
      company: 0,
      first_name: 'Grigor',
      last_name: 'Manukyan',
      email: 'grigor.manukyan@solicy.net',
      password: 'Grigor$55',
      role: 'admin',
      recruiter_permission: 'view_all',
    });
    const resp = await AuthService.signUp(form);
    console.log(resp);
  };

  const signIn = async (): Promise<any> => {
    const resp = await AuthService.signIn('karim@recrout.com', 'Welkom29!');
    console.log(resp);
  };

  const getMe = async (): Promise<any> => {
    const resp = await AuthService.getAccount();
    console.log(resp);
  };

  useEffect(() => {
    try {
      // signIn();
      // signUp();
      // getMe();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const showSelectedTab = (): JSX.Element | null => {
    switch (tabName) {
      case DashboardTabEnum.ABOUT_ME:
        return <AboutMeTab t={t} />;
      case DashboardTabEnum.PREFERENCES:
        return <CompenecyPreferencesTab t={t} />;
      case DashboardTabEnum.SKILLS:
        return <SkillsTab t={t} skills={skills} />;
      case DashboardTabEnum.IMAGE_YOUTUBE:
        return <ImageAndYoutubeTab t={t} />;
      case DashboardTabEnum.EDUCATION_EXPERIENCE:
        return <EducationExperienceTab t={t} />;
      default:
        return <AboutMeTab t={t} />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <div className="dashboard__left">
          <div className="dashboard__left__image">
            <Image
              className="dashboard__left__image-img"
              name="profile-image.png"
              width={236}
              height={236}
            />
            <div onClick={handleOpenPopup} className="dashboard__left__image-edit">
              <Image
                className="dashboard__left__image-edit-pen"
                name="pen.png"
              />
            </div>
          </div>
          <div className="dashboard__left__content">
            <div className="dashboard__left__swiper">
              <span className="dashboard__left__swiper-btn active">
                {t('show_me')}
              </span>
              <span className="dashboard__left__swiper-btn">
                {t('hide_me')}
              </span>
            </div>
            <div className="dashboard__left__link">
              <input
                className="dashboard__left__link-input"
                type="text"
                readOnly
                placeholder={t('profile_link')}
              />
              <Image
                className="dashboard__left__link-refresh"
                name="refresh.svg"
                width={12}
                height={12}
              />
            </div>
            <DropDown
              className="dashboard__left-dropdown"
              items={dropDownItems}
              selectedValue={handleDropdownChange}
            />
            <div className="dashboard__left__contact">
              <div className="dashboard__left__contact__user">
                <div className="dashboard__left__contact__user__icon">
                  <Image
                    className="dashboard__left__contact__user__icon-img"
                    name="email.svg"
                    width={12}
                    height={12}
                  />
                </div>
                <span className="dashboard__left__contact__user-contact">
                  karim.akhlal+0098@gmail.com
                </span>
              </div>
              <div className="dashboard__left__contact__user">
                <div className="dashboard__left__contact__user__icon">
                  <Image
                    className="dashboard__left__contact__user__icon-img"
                    name="phone.svg"
                    width={12}
                    height={12}
                  />
                </div>
                <span className="dashboard__left__contact__user-contact">
                  060000000
                </span>
              </div>
            </div>
            <div className="dashboard__left__social">
              <Image
                className="dashboard__left__social-icons"
                width={31}
                height={31}
                name="linkedin.svg"
              />
              <Image
                className="dashboard__left__social-icons"
                width={31}
                height={31}
                name="facebook.svg"
              />
              <Image
                className="dashboard__left__social-icons"
                width={31}
                height={31}
                name="twitter.svg"
              />
            </div>
            <div className="dashboard__left__actions">
              <Button
                iconName="upload.svg"
                className="dashboard__left__actions-purple"
                title={t('upload_cv')}
              />
              <Button
                iconName="resume.svg"
                className="dashboard__left__actions-sky"
                title={t('recrout_resume')}
              />
              <Button
                iconName="report.svg"
                className="dashboard__left__actions-green"
                title={t('assessment_report')}
              />
            </div>
          </div>
        </div>
        <div className="dashboard__right">
          <div className="dashboard__right__top">
            <div className="dashboard__right__top__left">
              <h1 className="dashboard__right__top__left-title">
                {t('invite_friends')} <Image name="attention.svg" />
              </h1>
              <p className="dashboard__right__top__left-desc">
                Upgrade or expand your account by inviting at least three of
                your friends to join you at recrout
              </p>
              <div className="dashboard__right__top__left__email">
                <input
                  className="dashboard__right__top__left__email-email"
                  type="email"
                  placeholder={t('email_address')}
                />
                <Button
                  title="invite"
                  type="submit"
                  className="dashboard__right__top__left__email-submit"
                />
              </div>
            </div>
            <div className="dashboard__right__top__right">
              <Button
                className="dashboard__right__top__right__button app"
                title="my_applications"
              />
              <Button
                className="dashboard__right__top__right__button job"
                title="find_job"
                iconName="search.svg"
              />
            </div>
          </div>
          <div className="dashboard__right__bottom">
            <div className="dashboard__right__bottom__tabs">
              <div className="dashboard__right__bottom__tabs__header">
                {tabHeader.map(item => (
                  <>
                    <div className="dashboard__right__bottom__tabs__header__item">
                      <span
                        onClick={() => handleTabChange(item)}
                        className={`dashboard__right__bottom__tabs__header__item-title ${
                          item.isActive ? 'active' : ''
                        }`}
                      >
                        {t(item.title)}
                        <span className="line"></span>
                      </span>
                    </div>
                  </>
                ))}
              </div>
            </div>

            <div className="dashboard__right__bottom-tab">
              {showSelectedTab()}
            </div>
          </div>
        </div>
      </div>
      {showAvatarPopup && (
        <Popup title="Edit Your Profile Image" onClose={handleClosePopup}>
          <AvatarPopup />
        </Popup>
      )}
    </>
  );
};

export default Dashboard;
