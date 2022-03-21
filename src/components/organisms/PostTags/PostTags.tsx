import React, { FC } from 'react';
import { GridV1 as Grid } from '../../atoms';
import { Tag } from '../../molecules';
import { TagType } from '../../templates';
import { ThemeColors } from '../../../utils';
// import { useRouter } from 'next/router';

export interface IPostTagsProps {
  tags: TagType[];
  router?: any;
  dynamicUrl?: string; // sample value: /posts?tag=
}

export const PostTags: FC<IPostTagsProps> = ({ tags, router, dynamicUrl }) => {
  // const router = useRouter();
  return (
    <Grid
      gridCols="grid-cols-3"
      smGridCols="sm:grid-cols-6"
      lgGridCols="lg:grid-cols-8"
      gapCols="gap-x-3"
      gapRows="gap-y-3"
      extraClass={`relative 2xl:px-10 z-10 my-4 grid-flow-row auto-rows-max w-full`}
    >
      {tags.map((item, index: number) => (
        <Tag
          tag={item.name}
          key={index + item.name}
          action={() => router.push(`${dynamicUrl}${item.name}`)}
          color={ThemeColors.postTag}
          border={`solid 1px ${ThemeColors.postTag}`}
        />
      ))}
    </Grid>
  );
};

export default PostTags;
