import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Posts } from './Posts';
import { data } from './Posts.mockdata';

export default {
  component: Posts,
  title: 'templates/Posts',
} as Meta;

const Template: Story = (args) => (
  <Posts data={args.data} imageBase={args.imageBase} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: { allPosts: data },
  imageBase: 'assets/people/',
};
