import React from 'react';
import { Story, Meta } from '@storybook/react';
import { About } from './About';
import { about as data } from '../../../mockdata/about';

export default {
  component: About,
  title: 'templates/About',
} as Meta;

const Template: Story = (args) => (
  <About data={args.data} imageBase={args.imageBase} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: data,
  imageBase: 'assets/banner/',
};
