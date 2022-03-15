import React, { FC } from 'react';
import { BiRightArrowCircle } from 'react-icons/bi';
import ReactMarkdown from 'react-markdown';
import { H1Tag } from '../../atoms';

interface Props {
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

export const TitleAndText: FC<Props> = ({ data }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-16 lg:mt-8">
      <H1Tag
        mdText="md:text-2xl"
        lgText="lg:text-4xl"
        color="text-black"
        classes="w-full text-left mt-0"
      >
        {data.title}
      </H1Tag>
      <div className="grid gap-y-10 text-gray-600 auto-rows-min">
        <ReactMarkdown children={data.content} />
        {data.anchor && (
          // <Link href="">
          <a className="flex text-primary" href={data.anchor?.link || ''}>
            {data.anchor.label}
            <BiRightArrowCircle size={24} style={{ marginLeft: '8px' }} />
          </a>
          // </Link>
        )}
      </div>
    </div>
  );
};
