import React, { FC } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
// import { InlineWysiwyg } from 'react-tinacms-editor';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Button, GridV1 as Grid } from '../../atoms';
import { PostAuthor } from '../../organisms';
import { IPostProps } from '../..//templates';
import { ThemeColors } from '../../../utils';

/* const renderers = {
  code: ({ language = 'js', value }) => {
    return (
      <SyntaxHighlighter style={darcula} language={language} children={value} />
    );
  },
}; */

interface IPostBodyProps {
  post: IPostProps;
}

export const PostBody: FC<IPostBodyProps> = ({ post }) => {
  return (
    <div className="relative z-10 mx-auto px-0 2xl:px-10 w-full max-w-screen-2xl">
      <div className={`bg-white rounded pb-10 flex justify-center`}>
        <div className="flex flex-col justify-center auto-rows-max w-full px-5 sm:px-none max-w-screen-lg">
          <div className="my-10">
            {/* <InlineWysiwyg name="content" format="markdown">
            <ReactMarkdown renderers={renderers} source={post.content} />
            </InlineWysiwyg> */}
            <ReactMarkdown children={post.content} />
          </div>

          <Grid
            gridCols="grid-cols-2"
            mdGridCols="md:grid-cols-4"
            gapCols="gap-x-3"
            gapRows="gap-y-3"
            extraClass="w-full"
          >
            <Button>Social</Button>
            <Button>Social</Button>
            <Button>Social</Button>
            <Button>Social</Button>
          </Grid>
          <div className="my-10">
            <Line />
          </div>
          <PostAuthor post={post} />
        </div>
      </div>
    </div>
  );
};

const Line = styled.hr`
  height: 2px;
  width: 100%;
  background-color: ${ThemeColors.postTag};
`;
