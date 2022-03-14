import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from './Button';

export default {
  component: Button,
  title: 'atoms/Button',
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Default' };

export const Gradient = Template.bind({});
Gradient.args = { type: 'gradient', children: 'Gradient' };

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'gradient',
  disabled: true,
  children: 'Disabled',
};
