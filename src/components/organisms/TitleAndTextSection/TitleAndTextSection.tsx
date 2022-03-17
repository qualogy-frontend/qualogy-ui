import React, { FC } from 'react';
import { Section } from '../../atoms';
import { TitleAndText } from '../../molecules';
import { bgColors, PageProps } from '../../templates';

export interface ITitleAndTextSectionProps extends PageProps {
  data: {
    title: string;
    content: string;
    anchor: {
      label: string;
      icon: string;
      link?: string;
      target: string;
    };
  };
}

export const TitleAndTextSection: FC<ITitleAndTextSectionProps> = ({
  data,
  background_color,
}) => {
  const bgColor = background_color
    ? bgColors[background_color]
    : 'bg-transparent';

  return (
    <Section backgroundColor={bgColor} px="" mPx="" mW="" mt="" mdMt="" mdMb="">
      <div className="container  max-w-screen-2xl flex w-full justify-center items-center flex-col mx-auto py-14 lg:py-20 px-5 md:px-10">
        <TitleAndText data={data} />
      </div>
    </Section>
  );
};
