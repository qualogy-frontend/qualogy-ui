import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Tag } from './Tag';

export default {
  component: Tag,
  title: 'molecules/Tag',
} as Meta;

const Template: Story = (args) => (
  <>
    <div className="bg-gradient-qualogy p-2">
      <Tag tag="React" {...args} />
    </div>
    <div className="text-slate-300 text-xs pt-5">
      Background color is just added in story and not part of component
    </div>
  </>
);

export const Default = Template.bind({});
Default.args = {};
