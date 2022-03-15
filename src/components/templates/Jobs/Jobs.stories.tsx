import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Jobs } from './Jobs';
import { jobs as data } from '../../../mockdata/jobs';

export default {
  component: Jobs,
  title: 'templates/Jobs',
} as Meta;

const Template: Story = (args) => <Jobs data={args.data} {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: data,
  showCircles: true,
};
