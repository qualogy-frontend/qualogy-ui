import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TextBlocks } from './TextBlocks';
import { data } from '../../../mockdata/textBlocks';

export default {
  component: TextBlocks,
  title: 'organisms/TextBlocks',
} as Meta;

const Template: Story = (args) => <TextBlocks data={data} {...args} />;

export const Default = Template.bind({});
Default.args = {};
