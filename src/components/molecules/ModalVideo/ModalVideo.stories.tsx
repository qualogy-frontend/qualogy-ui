import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ModalVideo } from './ModalVideo';

export default {
  component: ModalVideo,
  title: 'molecules/ModalVideo',
} as Meta;

const Template: Story = (args) => (
  <ModalVideo closeModal={() => {}} modal={true} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
