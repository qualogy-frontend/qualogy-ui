import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
  component: Avatar,
  title: 'Components/Avatar',
} as Meta;

const Template: Story = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'User',
  picture:
    'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg',
};
