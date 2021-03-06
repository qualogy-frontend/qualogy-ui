import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BreadCrumb } from './BreadCrumb';

export default {
  component: BreadCrumb,
  title: 'molecules/BreadCrumb',
} as Meta;

const Template: Story = (args) => (
  <>
    <div className="bg-gradient-qualogy">
      <BreadCrumb navItems={args.navItems} {...args} />
    </div>
    <div className="text-slate-300 text-xs pt-5">
      Background color is just added in story and not part of component
    </div>
  </>
);

export const Default = Template.bind({});
Default.args = {
  navItems: [
    { text: 'Vacatures', link: '/' },
    { text: 'Cloud Engineer', link: '/' },
  ],
};
