import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SkillSection } from './SkillSection';
import { data } from './SkillSection.mockdata';

export default {
  component: SkillSection,
  title: 'organisms/SkillSection',
} as Meta;

const Template: Story = (args) => <SkillSection data={data} {...args} />;

export const Default = Template.bind({});
Default.args = {};
