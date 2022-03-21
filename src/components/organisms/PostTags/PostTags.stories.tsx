import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PostTags } from './PostTags';
import { data } from '../PostAuthor/PostAuthor.mockdata';

export default {
  component: PostTags,
  title: 'organisms/PostTags',
} as Meta;

const Template: Story = (args) => (
  <>
    <div className="bg-gradient-qualogy p-1">
      <PostTags tags={data.tags} {...args} />
    </div>
    <div className="text-slate-300 text-xs pt-5">
      Background color is just added in story and not part of component
    </div>
  </>
);

export const Default = Template.bind({});
Default.args = {};
