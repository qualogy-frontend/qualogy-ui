import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Tech } from './Tech';
import { data } from './Tech.mockdata';

export default {
  component: Tech,
  title: 'organisms/Tech',
} as Meta;

const Template: Story = (args) => <Tech data={data} {...args} />;

export const Default = Template.bind({});
Default.args = {};
