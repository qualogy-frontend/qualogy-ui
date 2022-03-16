import React, { FC } from 'react';
import { Section } from '../../atoms';
import { ImageProps, PageProps } from '../../templates';

interface Props extends PageProps {
  data: {
    images: ImageProps[];
  };
  imageBase?: string;
}

export const ImageSection: FC<Props> = ({ data, imageBase }) => {
  const { images } = data;
  return (
    <Section
      px=""
      mPx=""
      mW=""
      mt=""
      mdMt=""
      mdMb=""
      backgroundColor="bg-transparent"
      extraClass="image-section"
    >
      <div className="container  max-w-screen-2xl grid grid-cols-3 gap-x-8 w-full justify-center items-center mx-auto py-14 lg:py-20 px-5 md:px-10">
        {images.map((item) => (
          <img
            className="h-56 w-full object-cover rounded"
            src={`${imageBase ? imageBase : ''}${item.url}`}
            alt={item.caption}
          />
        ))}
      </div>
    </Section>
  );
};
