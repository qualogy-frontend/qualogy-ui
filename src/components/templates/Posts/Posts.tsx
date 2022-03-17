import React from 'react';
import { Section } from '../../atoms';
import { PostCollection } from '../../organisms';
import { IPostsProps } from './Posts.interface';

export const Posts: React.FC<IPostsProps> = ({ data, imageBase }) => {
  const { allPosts } = data;
  return (
    <div className="relative flex bg-gradient-to-t from-white to-transparent ">
      <Section
        mt=""
        extraClass="posts w-full"
        id="posts"
        direction="flex-col"
        lgDirection="lg:flex-col"
      >
        <PostCollection
          allPosts={allPosts}
          title="Resource bibliotheek"
          sub="Recente blog artikelen"
          imageBase={imageBase}
        />
      </Section>
    </div>
  );
};
