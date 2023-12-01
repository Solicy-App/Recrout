'use client';

import React, { FC } from 'react';
import { FacebookShareButton, LinkedinShareButton } from 'react-share';
import RadarChart from '@/components/RadarChart/Index';
import Image from '@/components/image/Image';
import { aboutTabChartData } from '@/core/constants/aboutTabConstants';
import { IAboutAndShare } from '@/core/interface/aboutMe';

import './Index.scss';

const AboutAndShare: FC<IAboutAndShare> = ({ t, description }): JSX.Element => {

  return (
    <div className="about__right__top__share">
      <div className="about__right__top__left">
        <span className="about__right__top__left-desc">{description}</span>
        <LinkedinShareButton url={'https://npm-react-share-demo.netlify.app/'}>
          <Image name="in.svg" />
          {t('share_linkedin')}
        </LinkedinShareButton>

        <FacebookShareButton url={'https://npm-react-share-demo.netlify.app/'}>
          <Image name="fb.svg" />
          {t('share_facebook')}
        </FacebookShareButton>
      </div>

      <div className="about__right__top__radar">
        <RadarChart data={aboutTabChartData} />
      </div>
    </div>
  );
};

export default AboutAndShare;
