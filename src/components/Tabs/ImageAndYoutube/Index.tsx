import React, { FC } from 'react';
import ContentBlock from '@/components/ContentBlock/Index';
import SharedImages from '@/components/shared/SharedImages/Index';
import SharedVideos from '@/components/shared/SharedVideos/Index';
import { ITranslate } from '@/core/interface/translate';
import { sharedImages, sharedVideos } from '@/core/constants/imageAndYoutubeTabConstants';
import './Index.scss';

const ImageAndYoutubeTab: FC<ITranslate> = ({ t }) => {
  const handleEditImages = () => {};

  return (
    <div className="tab">
      <ContentBlock
        className="tab__photos"
        title={t('shared_image')}
        onActionClick={handleEditImages}
      >
        <SharedImages content={sharedImages} />
      </ContentBlock>
      <ContentBlock
        className="tab__photos"
        title={t('shared_youtube_videos')}
        onActionClick={handleEditImages}
      >
        <SharedVideos content={sharedVideos} />
      </ContentBlock>
    </div>
  );
};

export default ImageAndYoutubeTab;
