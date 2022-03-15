import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TitleAndTextSection } from './TitleAndTextSection';
import { data } from '../../../mockdata/titleAndText';

export default {
  component: TitleAndTextSection,
  title: 'templates/TitleAndTextSection',
} as Meta;

const Template: Story = (args) => (
  <TitleAndTextSection data={args.data} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: data,
};
