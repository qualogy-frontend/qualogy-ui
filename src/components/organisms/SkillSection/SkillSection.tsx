import { Anchor, H1Tag, Section, IButtonProps } from '../../atoms';
import { CardContent } from '../../molecules';
import { IJobInterface } from '../../templates';
import React, { FC } from 'react';

interface Props {
  data: {
    title: string;
    button: IButtonProps;
    skill: IJobInterface[];
  };
}

export const SkillSection: FC<Props> = ({ data }) => {
  const { title, button, skill } = data;
  return (
    <Section
      px=""
      mPx=""
      mW=""
      mt=""
      mdMt=""
      mdMb=""
      backgroundColor="bg-transparent"
      extraClass="Skills-section"
    >
      <div className="container  max-w-screen-2xl flex w-full justify-center items-center flex-col mx-auto  px-5 md:px-10">
        <div className="flex justify-between items-center w-full">
          {title && <H1Tag lgText="text-xl">{title}</H1Tag>}
          {button && (
            <Anchor link={button.link} type="gradient">
              {button.label}
            </Anchor>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skill.map((item, i) => (
            <CardContent
              title={item.title}
              icon={item.icon}
              content={item.description}
              link={item.link}
              bg={'bg-transparent'}
              shadow=""
              key={item.title + i}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
