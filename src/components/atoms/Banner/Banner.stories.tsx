import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Banner } from './Banner';

export default {
  component: Banner,
  title: 'atoms/Banner',
} as Meta;

const Template: Story = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {};
