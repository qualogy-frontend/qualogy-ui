import React from 'react';
import styled, { css } from 'styled-components';

export interface IRowProps {
  justify?: string;
  align?: string;
  padding?: string;
  width?: string;
  margin?: string;
  height?: string;
  extraClass?: string;
  wrap?: string;
  mWidth?: string;
}

export const Row: React.FC<IRowProps> = ({
  children,
  justify,
  align,
  padding,
  width = '100%',
  margin = '0',
  height = '100%',
  extraClass = '',
  wrap,
  mWidth,
}) => {
  return (
    <RowLayout
      justify={justify}
      align={align}
      padding={padding}
      width={width}
      mWidth={mWidth}
      margin={margin}
      height={height}
      wrap={wrap}
      className={`row ${extraClass}`}
    >
      {children}
    </RowLayout>
  );
};

export interface IRowLayoutProps {
  justify?: string;
  align?: string;
  padding?: string;
  width?: string;
  mWidth?: string;
  margin?: string;
  height?: string;
  wrap?: string;
}

export const RowLayout = styled.div<IRowLayoutProps>`
  display: flex;
  flex-direction: row;
  ${({ justify, align, width, mWidth, height, margin, wrap }) => css`
    justify-content: ${justify || 'center'};
    align-items: ${align || 'center'};
    ${width && `width: ${width};`}${mWidth && `max-width: ${mWidth};`}
    ${height && `height: ${height};`}
    ${margin && `margin: ${margin};`}
    ${wrap && `flex-wrap: ${wrap};`}
  `};
`;
