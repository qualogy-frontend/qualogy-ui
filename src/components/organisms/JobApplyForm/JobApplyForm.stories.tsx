import React from 'react';
import { Story, Meta } from '@storybook/react';
import { JobApplyForm } from './JobApplyForm';

export default {
  component: JobApplyForm,
  title: 'organisms/ApplyForm',
} as Meta;

const Template: Story = (args) => (
  <JobApplyForm
    jobApplyApiUrl="http://localhost:3001/api/v1/jobs/apply"
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
