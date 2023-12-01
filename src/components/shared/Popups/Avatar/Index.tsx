'use client';

import React, { FC, useRef, useState } from 'react';
import { CropperRef, Cropper } from 'react-advanced-cropper';
import Image from '@/components/image/Image';
import Button from '@/components/Button/Index';

import './Index.scss';

const AvatarPopup: FC = (): JSX.Element => {
  const fileRef = useRef(null);
  
  const [fileContent, setFileContent] = useState<string | ArrayBuffer | null>('');

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    handleImageChosen(e.dataTransfer.files[0]);
  };
  const handleImageRead = (e: ProgressEvent<FileReader>) => {
    const content = (e.target as FileReader).result;
    setFileContent(content);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target as HTMLInputElement;
    
    if (fileInput.files && fileInput.files.length > 0) {
      const file: File = fileInput.files[0];
      handleImageChosen(file);
    } else {
      // Handle the case when no file is selected
      console.error('No file selected');
    }
  };

  const handleImageChosen = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = handleImageRead;
    reader.readAsDataURL(file);
  };

  const onChange = (cropper: CropperRef) => {
    const canvas = cropper.getCanvas();
    const dataURL = canvas?.toDataURL();
    console.log(dataURL, '----');
  };

  const chooseFile = () => {
    if (fileRef.current) {
      (fileRef.current as HTMLInputElement).click();
    }
  };

  return (
    <div className="av">
      <div className="av__content">
        <Cropper src={fileContent as string} onChange={onChange} className={'cropper'} />
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="av__content__upload"
        >
          <div className="av__content__upload__top">
            <Image name="upload-file.svg" width={40} height={40} />
            <span className="av__content__upload__top-title">
              Drag and drop your files here
            </span>
            <span className="av__content__upload__top-support">
              Files supported: JPG, PNG
            </span>
            <span className="av__content__upload__top-or">or</span>
          </div>
          <div className="av__content__upload__bottom">
            <Button
              onClick={chooseFile}
              className="av__content__upload__bottom-browse"
              title="Browse File"
            />
          </div>
        </div>
        <input
          onChange={handleInputChange}
          ref={fileRef}
          className="file"
          type="file"
          accept="image/png, image/jpeg"
        />
        <Button title="save" className="av__content-save" />
      </div>
    </div>
  );
};

export default AvatarPopup;
