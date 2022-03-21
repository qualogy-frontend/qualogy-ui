import React, { FC } from 'react';
import { BiRightArrowCircle } from 'react-icons/bi';
import { Image, Paragraph, Button, GridV1 as Grid } from '../../atoms';
import { IPostProps } from '../../templates';
import { ThemeColors } from '../../../utils';
// import { useRouter } from 'next/router';
// import Link from 'next/link';

export interface IPostAuthorProps {
  post: IPostProps;
  imageBase?: string;
}

export const PostAuthor: FC<IPostAuthorProps> = ({ post, imageBase }) => {
  const { coverImage, author } = post;
  return (
    <Grid
      gapCols="gap-x-none"
      gridCols="grid-cols-1"
      smGridCols="md:grid-cols-12"
      extraClass="w-full md:gap-x-3"
    >
      <div className="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3">
        <Image
          src={`${imageBase ? imageBase : ''}${coverImage.url}`}
          alt={author.name}
          margin="0"
          extraClass="w-full"
        />
      </div>

      <div className="md:col-start-3 md:col-end-12 lg:col-end-10 2xl:col-end-8 flex justify-start flex-col">
        <Paragraph fontWeight="bold">Over de autheur</Paragraph>

        <Paragraph>
          {author.about.length > 250
            ? `${author.about.substring(0, 250)}...`
            : author.about}
        </Paragraph>
      </div>
      <div className="md:col-start-3 md:col-end-12">
        <Button
          type="blank"
          width="initial"
          color={ThemeColors.primary}
          minWidth="initial"
        >
          {/* <Link href={`/authors/${author.slug}`}> */}
          <a href={`/authors/${author.slug}`}>
            <Paragraph fontSize="18px" margin="0 8px 0 0">
              Meer lezen
            </Paragraph>
          </a>
          {/* </Link> */}

          <BiRightArrowCircle size={24} />
        </Button>
      </div>
    </Grid>
  );
};
