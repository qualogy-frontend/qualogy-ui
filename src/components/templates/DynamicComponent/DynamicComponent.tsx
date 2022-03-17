import React, { FC } from 'react';
import { Tab } from '../../molecules';
import {
  JobSection,
  ListSection,
  ModalVideoSection,
  ImageSection,
  RoadMapSection,
  SkillSection,
  Tech,
  TextAndImageSection,
  TextBlocks,
  TitleAndTextSection,
} from '../../organisms';
import { About, Customer, Intro, Jobs, Posts, Team } from '..';

export interface ContentProps {
  __component: string;
  id: number;
}

interface IDynamicComponentProps {
  layout: ContentProps[];
  background_color?: string;
  imageBase?: string;
}

/**
 * Checks if next component is posts, if not return false
 * @returns
 */
const checkJobsNextComponent = (index: number, components: any) => {
  const nextIsPost = components[index + 1].__component === 'section.posts';
  return nextIsPost;
};

export const DynamicComponent: FC<IDynamicComponentProps> = ({
  layout,
  background_color,
  imageBase,
}) => {
  // layouts l
  const pageLayout = {
    service: About,
    customers: Customer,
    hero: Intro,
    jobs: Jobs,
    video: ModalVideoSection,
    posts: Posts,
    road: RoadMapSection,
    tabs: Tab,
    employees: Team,
    techs: Tech,
    'image-section': ImageSection,
    'salesforce-jobs-group': JobSection,
    'list-group': ListSection,
    'skill-group': SkillSection,
    'text-block-group': TextBlocks,
    'text-and-image-group': TextAndImageSection,
    'title-and-text': TitleAndTextSection,
    // TODO: tabs: Tabs, 'posts-scroll': PostsScroll,
  };

  /**
   *
   * removes text from string so component can match pageLayout keyword
   * @param component
   * @returns
   */
  const transformComponentName = (
    component: string
  ): keyof typeof pageLayout => {
    const blankComponent: any = component.includes('section.')
      ? component.replace('section.', '')
      : component;
    return blankComponent;
  };

  /**
   * Filter out components that are not in the page layout object
   */
  const filterList = layout.filter(
    (filter) => pageLayout[transformComponentName(filter.__component)]
  );

  // render component
  return (
    <>
      {filterList.map((item, index) => {
        // Get component data
        const Component: any =
          pageLayout[transformComponentName(item.__component)];
        // if component is jobs check next component
        const NextIsPost: boolean =
          item.__component === 'section.jobs' &&
          checkJobsNextComponent(index, filterList);
        // render components
        return (
          <Component
            data={item}
            key={index}
            showCircles={NextIsPost}
            background_color={background_color}
            imageBase={imageBase}
          />
        );
      })}
    </>
  );
};
