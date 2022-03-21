import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PostBody } from './PostBody';
import { data } from '../PostAuthor/PostAuthor.mockdata';

export default {
  component: PostBody,
  title: 'organisms/PostBody',
} as Meta;

const Template: Story = (args) => <PostBody post={data} {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
