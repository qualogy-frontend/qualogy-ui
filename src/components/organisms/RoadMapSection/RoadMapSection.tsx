import React, { FC } from 'react';
import { H1Tag, Paragraph, Section } from '../../atoms';
import { ImageProps } from '../../templates';

export interface IRoadMapSectionProps {
  data: {
    id: number;
    title: string;
    sub: string;
    item: {
      id: number;
      title: string;
      content: string;
    }[];
    image_1: ImageProps;
    image_2: ImageProps;
    image_3: ImageProps;
    image_4: ImageProps;
    awards: ImageProps[];
  };
  imageBase?: string;
}

export const RoadMapSection: FC<IRoadMapSectionProps> = ({
  data,
  imageBase,
}) => {
  const { title, sub, item, image_1, image_2, image_3, image_4, awards } = data;
  return (
    <Section px="" mPx="" mW="" mt="" mdMt="" mdMb="">
      <div className="container  max-w-screen-2xl flex w-full  flex-col mx-auto py-20 px-5 md:px-10">
        <div className="title">
          <Paragraph className="text-ternary">{sub}</Paragraph>
          <H1Tag lgText="lg:text-4xl">{title}</H1Tag>
        </div>
        <div className="content lg:grid grid-cols-12 gap-x-8">
          <div className="memorial grid grid-cols-2 gap-y-8 gap-x-16 relative col-start-1 col-end-9">
            <img
              className="rounded max-h-44 top-16 relative z-0 w-full object-cover transition-all duration-1000"
              src={`${imageBase ? imageBase : ''}${image_1.url}`}
              alt={`alt`}
            />
            <img
              className="rounded max-h-44 relative z-0 w-full object-cover transition-all duration-1000"
              src={`${imageBase ? imageBase : ''}${image_2.url}`}
              alt={`alt`}
            />
            <img
              className="rounded max-h-52 relative z-10 pl-60 col-start-1 col-end-3 w-full object-cover transition-all duration-1000"
              src={`${imageBase ? imageBase : ''}${image_3.url}`}
              alt={`alt`}
            />
            <img
              className="rounded max-h-44 relative -top-8 lg:-top-24 left-16 z-20 row-start-3 w-full object-cover transition-all duration-1000"
              src={`${imageBase ? imageBase : ''}${image_4.url}`}
              alt={`alt`}
            />
          </div>
          <div className="road col-start-9 col-end-13">
            {item.map((__item, i) => (
              <div className="flex" key={i}>
                <div className="flex flex-col justify-start items-center relative top-1">
                  <div className="rounded-full border border-primary min-w-4 min-h-4 w-4 h-4"></div>
                  {item.length !== i + 1 && (
                    <div className="h-full w-px border-l border-primary"></div>
                  )}
                </div>
                <div className="flex flex-col pb-8 pl-6">
                  <Paragraph className={`font-bold`}>{__item.title}</Paragraph>
                  <Paragraph>{__item.content}</Paragraph>
                </div>
              </div>
            ))}
          </div>
          <div className="awards row-start-2 col-start-1 col-end-9 grid grid-cols-3">
            {awards.map((item, i) => (
              <img
                className="w-full h-full max-h-24 object-contain"
                key={i}
                src={`${imageBase ? imageBase : ''}${item.url}`}
                alt={item.alternativeText}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
