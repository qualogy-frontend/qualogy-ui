import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ListSection } from './ListSection';
import { data } from '../../../mockdata/listSection';

export default {
  component: ListSection,
  title: 'organisms/ListSection',
} as Meta;

const Template: Story = (args) => <ListSection data={data} {...args} />;

export const Default = Template.bind({});
Default.args = {};
