import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Anchor } from './Anchor';

export default {
  component: Anchor,
  title: 'atoms/Anchor',
} as Meta;

const Template: Story = (args) => <Anchor {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: 'Anchor' };
