import React from 'react';
import { Paragraph, IGridChildLayoutProps } from '../../atoms';
import { TagLayout } from './Tag.style';

const TagStyles = {
  default: TagLayout,
};

export interface ITagProps {
  tag?: string;
  action?: () => void;
  style?: keyof typeof TagStyles;
  color?: string;
  border?: string;
  extraClass?: string;
}

export const Tag: React.FC<ITagProps & IGridChildLayoutProps> = ({
  tag,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  action = () => {},
  style = 'default',
  color = 'white',
  border = '1px solid #ffffff',
  extraClass = '',
  ...props
}) => {
  const SelectedTag = TagStyles[style];
  return (
    <SelectedTag
      onClick={() => action()}
      {...props}
      as="button"
      border={border}
      className={extraClass}
    >
      <Paragraph fontSize="14px" color={color}>
        {tag}
      </Paragraph>
    </SelectedTag>
  );
};
