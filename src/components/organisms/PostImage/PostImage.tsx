import React, { FC } from 'react';
import { InlineImage } from 'react-tinacms-inline';
import styled from 'styled-components';
import { IPostProps } from '../../templates';

export interface IPostImageProps {
  post: IPostProps;
  imageBase?: string;
}

export const PostImage: FC<IPostImageProps> = ({ post, imageBase }) => {
  return (
    <InlineImage
      name="coverImage.id"
      uploadDir={() => '/'}
      parse={(media) => media.id}
      className="relative z-10 w-full max-w-screen-2xl mx-auto px-0 2xl:px-10"
    >
      {() => (
        <PostImageLayout
          src={`${imageBase ? imageBase : ''}${post.coverImage.url}`}
          alt={`Cover Image for ${post.title}`}
        />
      )}
    </InlineImage>
  );
};

const PostImageLayout = styled.img`
  height: 100%;
  max-height: 500px;
  /* max-width: 1100px; */
  object-fit: cover;
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;
