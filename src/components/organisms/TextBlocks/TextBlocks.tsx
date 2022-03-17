import React, { FC } from 'react';
import { GridV1 as Grid, Section, H1Tag, Paragraph } from '../../atoms';

interface Block {
  id: number;
  title: string;
  content: string;
  title_layout?: string;
  text_layout?: string;
  grid_layout?: string;
  image?: string;
}

export interface ITextBlocksProps {
  data: {
    title?: string;
    content: Block[];
  };
}

export const TextBlocks: FC<ITextBlocksProps> = ({ data }) => {
  const { title, content } = data;
  return (
    <Section>
      <Grid gapCols="" extraClass="text-blocks px-none  md:gap-x-9">
        {title && (
          <H1Tag
            classes={`row-start-1 row-end-2 col-start-1 col-end-6 lg:text-9xl`}
          >
            {title}
          </H1Tag>
        )}
        {content &&
          content?.map((item, index) => (
            <div className={`text-block ${item.grid_layout}`} key={index}>
              <H1Tag lgText={item.title_layout}>{item.title}</H1Tag>
              <Paragraph className={item.text_layout}>{item.content}</Paragraph>
            </div>
          ))}
      </Grid>
    </Section>
  );
};
