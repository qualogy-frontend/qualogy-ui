import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Footer } from './Footer';
import { data } from './Footer.mockdata';

export default {
  component: Footer,
  title: 'organisms/Footer',
} as Meta;

const Template: Story = (args) => <Footer footerNavigation={data} {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
