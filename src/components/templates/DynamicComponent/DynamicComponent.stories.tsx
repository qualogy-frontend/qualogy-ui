import React from 'react';
import { Story, Meta } from '@storybook/react';
import { DynamicComponent } from './DynamicComponent';
import {
  intro,
  about,
  titleAndText,
  jobs,
} from '../../../mockdata/dynamicPage';

export default {
  component: DynamicComponent,
  title: 'templates/DynamicComponent',
  argTypes: {
    component: {
      options: ['Intro', 'About', 'Title & Text', 'Jobs', 'About & Jobs'],
      control: { type: 'select' },
    },
    // Remove layout from control section
    layout: {
      table: {
        disable: true,
      },
    },
    background_color: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story = (args) => {
  if (args.component === 'Intro') {
    return <DynamicComponent layout={[intro]} {...args} />;
  }
  if (args.component === 'About') {
    return <DynamicComponent layout={[about]} {...args} />;
  }
  if (args.component === 'Title & Text') {
    return <DynamicComponent layout={[titleAndText]} {...args} />;
  }
  if (args.component === 'Jobs') {
    return <DynamicComponent layout={[jobs]} {...args} />;
  }
  if (args.component === 'About & Jobs') {
    return <DynamicComponent layout={[about, jobs]} {...args} />;
  }
  return <></>;
};

export const Default = Template.bind({});
Default.args = {
  component: 'Intro',
  imageBase: 'assets/banner/',
};
