import React from 'react';
import { H1Tag, Paragraph, GridV1 as Grid } from '../../atoms';
import { CardPost } from '../../molecules';
import { IPostInterface } from '../../templates';
import { ThemeColors } from '../../../utils';

export interface IPostCollectionProps {
  allPosts: IPostInterface[];
  sub: string;
  title: string;
  imageBase?: string;
  margin?: string;
  count?: number;
}

export const PostCollection: React.FC<IPostCollectionProps> = ({
  allPosts,
  sub,
  title,
  imageBase,
  // margin,
  count = 3,
}) => {
  const cols = count == 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2';
  return (
    <>
      <div>
        <Paragraph align="center" color={ThemeColors.subFont}>
          {sub}
        </Paragraph>
        <H1Tag classes="text-center">{title}</H1Tag>
      </div>
      <div>
        <Grid
          gridCols="grid-cols-1"
          lgGridCols={cols}
          extraClass="grid-flow-row auto-rows-max gap-x-0 sm:gap-x-9"
        >
          {allPosts.slice(0, count).map((post, index) => (
            <CardPost
              width="100%"
              title={post.title}
              date={post.date}
              image={`${imageBase}${post.coverImage.url}`}
              alt={post.slug}
              author={post?.author?.name}
              authorSlug={post?.author?.slug}
              body={post.excerpt}
              slug={post.slug}
              key={index}
            />
          ))}
        </Grid>
      </div>
    </>
  );
};
