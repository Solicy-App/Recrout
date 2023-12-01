import React, { FC } from 'react';
import { ImageI } from '@/core/interface/image';

const Image: FC<ImageI> = ({
  className,
  name,
  url,
  width = 15,
  height = 15,
}) => {
  return (
    <img
      className={className}
      src={name ? `/images/${name}` : url}
      alt={name ?? 'img'}
      width={width}
      height={height}
    />
  );
};

export default Image;
