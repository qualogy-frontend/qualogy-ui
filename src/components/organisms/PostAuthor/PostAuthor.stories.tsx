import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PostAuthor } from './PostAuthor';
import { data } from './PostAuthor.mockdata';

export default {
  component: PostAuthor,
  title: 'organisms/PostAuthor',
} as Meta;

const Template: Story = (args) => <PostAuthor post={data} {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
