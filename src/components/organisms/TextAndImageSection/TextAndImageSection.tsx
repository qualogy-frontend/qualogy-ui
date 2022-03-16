import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { H1Tag, H2Tag, Section } from '../../atoms';
import { ImageProps } from '../../templates';

interface childProps {
  data: {
    id: number;
    sub: string;
    title: string;
    content: string;
    image: ImageProps;
  };
  reverse?: boolean;
  imageBase?: string;
}

export const TextAndImage: FC<childProps> = ({
  data,
  reverse = false,
  imageBase,
}) => {
  const { sub, title, content, image } = data;
  const imagePosition = reverse
    ? 'lg:col-start-2 lg:col-end-6 row-start-1'
    : 'lg:col-start-8 lg:col-end-12';
  const textPosition = reverse
    ? 'lg:col-start-7 lg:col-end-12  row-start-1'
    : 'lg:col-start-2 lg:col-end-6';
  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-x-16">
      <div className={`${textPosition} mt-8 lg:mt-0`}>
        <H2Tag size="text-lg" my="0" classes="mb-0">
          {sub}
        </H2Tag>
        <H1Tag size="" mdText="" lgText="text-xl" my="my-0" classes="mb-4">
          {title}
        </H1Tag>
        <ReactMarkdown children={content} />
      </div>
      <img
        className={`${imagePosition} object-cover max-h-64 w-full`}
        src={`${imageBase ? imageBase : ''}${image.url}`}
        alt={image.alternativeText}
      />
    </div>
  );
};

interface Props {
  data: {
    id: number;
    sub: string;
    title: string;
    content: string;
    text_and_image: {
      id: number;
      sub: string;
      title: string;
      content: string;
      image: ImageProps;
    }[];
  };
  imageBase?: string;
}

export const TextAndImageSection: FC<Props> = ({ data, imageBase }) => {
  const { text_and_image } = data;
  return (
    <Section
      px=""
      mPx=""
      mW=""
      mt=""
      mdMt=""
      mdMb=""
      extraClass="Text-and-image-section"
    >
      <div className="container  max-w-screen-2xl flex w-full  flex-col mx-auto py-20 px-5 md:px-10 space-y-24">
        {text_and_image.map((item, i) => {
          return (
            <TextAndImage
              key={item.id}
              data={item}
              imageBase={imageBase}
              reverse={!(i % 2 === 0)}
            />
          );
        })}
      </div>
    </Section>
  );
};
