import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BreadCrumb } from './BreadCrumb';

export default {
  component: BreadCrumb,
  title: 'molecules/BreadCrumb',
} as Meta;

const Template: Story = (args) => (
  <BreadCrumb navItems={args.navItems} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  navItems: [
    { text: 'Vacatures', link: '/' },
    { text: 'Cloud Engineer', link: '/' },
  ],
};
