import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ModalVideoSection } from './ModalVideoSection';
import { data } from '../../../mockdata/modalVideo';

export default {
  component: ModalVideoSection,
  title: 'organisms/ModalVideoSection',
} as Meta;

const Template: Story = (args) => (
  <ModalVideoSection data={args.data} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: data,
};
