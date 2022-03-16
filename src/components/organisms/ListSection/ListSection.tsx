import React, { FC } from 'react';
import { H1Tag, Paragraph, Section } from '../../atoms';
import { IListProps } from './List.interface';

interface Props {
  data: IListProps;
}

export const ListSection: FC<Props> = ({ data }) => {
  const { title, description, list } = data;
  return (
    <Section px="" mPx="" mW="" mt="" mdMt="" mdMb="" extraClass="list-section">
      <div className="container  max-w-screen-2xl grid lg:grid-cols-12 w-full justify-center items-center flex-col mx-auto  px-5 md:px-10 pb-20 lg:pb-28">
        {title && <H1Tag>{title}</H1Tag>}
        {description && <Paragraph>{description}</Paragraph>}
        <div className="lg:col-start-2 lg:col-end-12 flex w-full md:space-x-16 flex-col md:flex-row">
          {list.map((listItem) => {
            return (
              <div className="">
                <H1Tag
                  mdText="md:text-3xl"
                  lgText="lg:text-4xl"
                  key={listItem.id}
                >
                  {listItem.title}
                </H1Tag>
                <ul className="list space-y-6 pl-2 text-gray-600">
                  {listItem.item?.map((innerItem) => {
                    return (
                      <li className="list-decimal">
                        <Paragraph className="font-bold text-black">
                          {innerItem.title}
                        </Paragraph>
                        <Paragraph className="">{innerItem.content}</Paragraph>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
