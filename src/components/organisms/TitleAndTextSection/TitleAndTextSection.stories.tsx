import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TitleAndTextSection } from './TitleAndTextSection';
import { data } from './TitleAndTextSection.mockdata';

export default {
  component: TitleAndTextSection,
  title: 'organisms/TitleAndTextSection',
} as Meta;

const Template: Story = (args) => (
  <TitleAndTextSection data={args.data} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: data,
};
