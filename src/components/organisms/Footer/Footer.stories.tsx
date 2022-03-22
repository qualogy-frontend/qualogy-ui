import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Footer } from './Footer';
import { data } from './Footer.mockdata';

export default {
  component: Footer,
  title: 'organisms/Footer',
} as Meta;

const Template: Story = (args) => (
  <Footer
    footerNavigation={data}
    imageUrls={{
      logoWithTitle: '/assets/logo/logo-with-title.svg',
      qualityControl1: '/assets/cert/quality-control-1.svg',
      qualityControl2: '/assets/cert/quality-control-2.svg',
    }}
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
