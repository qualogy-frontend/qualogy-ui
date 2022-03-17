import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Tab } from './Tab';
import { data } from './Tab.mockdata';

export default {
  component: Tab,
  title: 'molecules/Tabs',
} as Meta;

const Template: Story = (args) => <Tab data={data} {...args} />;

export const Default = Template.bind({});
Default.args = {};
