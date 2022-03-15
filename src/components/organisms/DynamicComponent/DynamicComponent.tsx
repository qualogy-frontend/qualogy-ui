import React, { FC } from 'react';
import {
  About,
  Customer,
  Intro,
  Jobs,
  Posts,
  TitleAndTextSection,
  JobSection,
} from '../../templates';

interface ContentProps {
  __component: string;
  id: number;
}

interface IDynamicComponentProps {
  layout: ContentProps[];
  background_color?: string;
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
}) => {
  // layouts l
  const pageLayout = {
    service: About,
    customers: Customer,
    hero: Intro,
    jobs: Jobs,
    posts: Posts,
    'title-and-text': TitleAndTextSection,
    'salesforce-jobs-group': JobSection,
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
          />
        );
      })}
    </>
  );
};
