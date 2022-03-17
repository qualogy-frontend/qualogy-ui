import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Team } from './Team';
import { data } from './Team.mockdata';

export default {
  component: Team,
  title: 'templates/Team',
} as Meta;

const Template: Story = (args) => <Team data={data} {...args} />;

export const Default = Template.bind({});
Default.args = {};
