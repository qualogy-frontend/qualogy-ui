import React from 'react';
import { Story, Meta } from '@storybook/react';
import { JobSection } from './JobSection';
import { data } from './JobSection.mockdata';

export default {
  component: JobSection,
  title: 'templates/JobSection',
} as Meta;

const Template: Story = (args) => <JobSection data={args.data} {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: data,
};
