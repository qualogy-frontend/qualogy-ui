import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Customer } from './Customer';
import { data } from './Customer.mockdata';

export default {
  component: Customer,
  title: 'templates/Customer',
} as Meta;

const Template: Story = (args) => (
  <Customer data={args.data} imageBase={args.imageBase} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: data,
  imageBase: 'assets/customers/',
};
