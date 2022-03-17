import React, { FC } from 'react';
import { Anchor, H1Tag, Section, IButtonProps } from '../../atoms';
import { CardContent } from '../../molecules';
import { IJobInterface } from '../../templates';

export interface IJobSectionProps {
  data: {
    title: string;
    button: IButtonProps;
    job: IJobInterface[];
  };
}

export const JobSection: FC<IJobSectionProps> = ({ data }) => {
  const { title, button, job } = data;
  return (
    <Section
      px=""
      mPx=""
      mW=""
      mt=""
      mdMt=""
      mdMb=""
      backgroundColor="bg-content"
      extraClass="jobs-section"
    >
      <div className="container  max-w-screen-2xl flex w-full justify-center items-center flex-col mx-auto py-14 lg:py-20 px-5 md:px-10">
        <div className="flex justify-between items-center w-full">
          {title && (
            <H1Tag
              my="my-0 mb-6 lg:my-6"
              classes={`${button ? 'mr-4 md:mr-0' : ''}`}
              lgText="text-xl"
            >
              {title}
            </H1Tag>
          )}
          {button && (
            <Anchor
              link={button.link}
              type="gradient"
              extraClasses={`text-xs md:text-base w-40 md:w-auto`}
            >
              {button.label}
            </Anchor>
          )}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {job.map((item, i) => (
            <CardContent
              title={item.title}
              icon={item.icon}
              content={item.description}
              link={item.link}
              bg={item.background_color || 'bg-white'}
              key={item.title + i}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
