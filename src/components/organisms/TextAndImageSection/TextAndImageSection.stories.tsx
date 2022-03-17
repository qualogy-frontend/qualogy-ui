import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TextAndImageSection } from './TextAndImageSection';
import { data } from './TextAndImageSection.mockdata';

export default {
  component: TextAndImageSection,
  title: 'organisms/TextAndImageSection',
} as Meta;

const Template: Story = (args) => <TextAndImageSection data={data} {...args} />;

export const Default = Template.bind({});
Default.args = {};
