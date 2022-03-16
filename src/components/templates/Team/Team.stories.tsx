import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Team } from './Team';
import { team } from '../../../mockdata/team';

export default {
  component: Team,
  title: 'templates/Team',
} as Meta;

const Template: Story = (args) => <Team data={team} {...args} />;

export const Default = Template.bind({});
Default.args = {};
