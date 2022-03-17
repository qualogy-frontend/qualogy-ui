import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Navigation } from './Navigation';
import { data } from './Navigation.mockdata';

export default {
  component: Navigation,
  title: 'organisms/Navigation',
} as Meta;

const Template: Story = (args) => (
  <Navigation lang={data.lang} items={data.items} {...args} />
);

export const Default = Template.bind({});
Default.args = {};
