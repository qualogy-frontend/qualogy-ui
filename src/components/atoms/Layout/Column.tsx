import React from 'react';
import styled, { css } from 'styled-components';

export interface IColumnProps {
  justify?: string;
  align?: string;
  padding?: string;
  margin?: string;
  height?: string;
  mWidth?: string;
  width?: string;
  index?: number;
}

export const Column: React.FC<IColumnProps> = ({
  children,
  justify = 'center',
  align = 'center',
  padding = '0',
  margin,
  height = '100%',
  width = '100%',
  mWidth,
  index,
}) => {
  return (
    <ColumnLayout
      justify={justify}
      align={align}
      padding={padding}
      margin={margin}
      width={width}
      mWidth={mWidth}
      height={height}
      index={index}
      className="column"
    >
      {children}
    </ColumnLayout>
  );
};

export interface IColumnLayoutProps {
  justify?: string;
  align?: string;
  padding?: string;
  margin?: string;
  width?: string;
  mWidth?: string;
  height?: string;
  index?: number;
}

const ColumnLayout = styled.div<IColumnLayoutProps>`
  display: flex;
  flex-direction: column;
  z-index: 1;

  ${({ justify, align, padding, width, height, index, margin, mWidth }) => css`
    justify-content: ${justify};
    align-items: ${align};
    padding: ${padding};
    width: ${width};
    height: ${height};
    ${index && `z-index: ${index};`}
    ${margin && `margin: ${margin};`}
    ${mWidth && `max-width: ${mWidth};`}
  `}
`;
