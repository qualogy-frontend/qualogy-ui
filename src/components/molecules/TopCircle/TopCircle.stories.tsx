import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TopCircle } from './TopCircle';

export default {
  component: TopCircle,
  title: 'molecules/TopCircle',
} as Meta;

const Template: Story = (args) => <TopCircle {...args} />;

export const Default = Template.bind({});
Default.args = {};
