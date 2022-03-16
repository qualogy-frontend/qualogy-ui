import React from 'react';
import { Story, Meta } from '@storybook/react';
import { RoadMapSection } from './RoadMapSection';
import { data } from '../../../mockdata/roadMapSection';

export default {
  component: RoadMapSection,
  title: 'organisms/RoadMapSection',
} as Meta;

const Template: Story = (args) => <RoadMapSection data={data} {...args} />;

export const Default = Template.bind({});
Default.args = {};
