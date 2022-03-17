import React from 'react';
import { H3Tag, Section, Paragraph, Image, GridV1 as Grid } from '../../atoms';
import { ImageProps } from '../../templates';
import { ThemeColors } from '../../../utils';
import { ITechProps } from './Tech.interface';

const createRows = (images: ImageProps[]) => {
  let rows: any = [images];
  if (images.length > 6) {
    let row1: any = [];
    let row2: any = [];
    for (let i = 0; images.length > i; i++) {
      if (i < 6) {
        row1 = [...row1, images[i]];
      } else {
        row2 = [...row2, images[i]];
      }
    }
    rows = [row1, row2];
  }
  return rows;
};

export const Tech: React.FC<ITechProps> = ({ data, imageBase }) => {
  const { title, content, images } = data;
  const imageRows = createRows(images);
  return (
    <Section
      curvedBackground="white"
      backgroundColor="bg-content"
      extraClass="curved curved-top"
      mW="max-w-screen-full"
      mdMt="md:mt-0"
      mdPt="md:pt-24"
      id="our-techs"
    >
      <Grid
        gapCols="gap-x-0"
        gridCols="grid-cols-1"
        smGridCols="sm:grid-cols-12"
        extraClass="pt-32 pb-28 grid-flow-row auto-rows-max px-5 sm:px-10 w-full sm:w-none sm:gap-x-9"
        gapRows="gap-y-10"
      >
        <div
          className={`row-start-1 col-start-1 col-end-13  sm:col-start-1  flex align-center flex-col justify-center`}
        >
          <H3Tag>{title}</H3Tag>
          <Paragraph color={ThemeColors.inactiveFont} fontSize="18px">
            {content}
          </Paragraph>
        </div>
        <div
          className={`row-start-2 col-start-1 col-end-13  sm:col-start-1 flex align-center flex-col justify-center mt-10`}
        >
          <Grid
            gridRows="grid-rows-3"
            xlGridRows="xl:grid-rows-2"
            //
            gridCols="grid-cols-1"
            mdGridCols="md:grid-cols-2"
            lgGridCols="lg:grid-cols-4"
            xlGridCols="xl:grid-cols-6"
            extraClass="gap-y-10 w-full sm:w-none"
          >
            {imageRows.map((images: ImageProps[]) =>
              images.map((image, index: number) => (
                <Image
                  top={index % 2 ? -10 : 10}
                  alternate={index % 2 ? 10 : -10}
                  type="square"
                  src={`${imageBase ? imageBase : ''}${image.url}`}
                  alt={image.alternativeText}
                  margin="0"
                  width="100%"
                  extraClass="z-10"
                />
              ))
            )}
          </Grid>
        </div>
      </Grid>
    </Section>
  );
};
