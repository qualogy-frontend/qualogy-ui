import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CardPost } from './Card';
import { posts } from '../../mockdata/posts';

export default {
  component: CardPost,
  title: 'Components/Card',
} as Meta;

const Template: Story = ({ post }) => {
  console.log(post);
  return (
    <CardPost
      width="100%"
      title={post.title}
      date={post.date}
      image="https://picsum.photos/id/0/1000/250"
      alt={post.slug}
      author={post.author.name}
      authorSlug={post.author.slug}
      body={post.excerpt}
      slug={post.slug}
    />
  );
};

export const Default = Template.bind({});
Default.args = { post: posts[0] };
