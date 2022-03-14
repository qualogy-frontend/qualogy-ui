import React from 'react';
import { ImageBase, ImageGrid, ImageSquare } from './Image.style';

export const ImageTypeMapper: any = {
  default: ImageBase,
  square: ImageSquare,
  gird: ImageGrid,
};

export interface IImageProps {
  type?: keyof typeof ImageTypeMapper;
  src: string;
  alt: string;
  top?: number;
  alternate?: number;
  animSpeed?: string;
  padding?: string;
  width?: string;
  height?: string;
  bounce?: boolean;
  margin?: string | boolean;
  mobile?: boolean;
  extraClass?: string;
}

export const Image: React.FC<IImageProps> = ({
  type = 'default',
  src,
  alt,
  top,
  alternate,
  animSpeed,
  padding,
  width,
  height,
  bounce = false,
  margin = '0 24px',
  mobile = false,
  extraClass = '',
  ...props
}) => {
  const ImageType: any = ImageTypeMapper[type];

  return (
    <ImageType
      src={src}
      alt={alt}
      top={top}
      alternate={alternate}
      padding={padding}
      width={width}
      height={height}
      animSpeed={animSpeed}
      bounce={bounce}
      margin={margin}
      as="img"
      mobile={mobile}
      className={extraClass}
      {...props}
    />
  );
};
