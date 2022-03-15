import React from 'react';
import styled, { css } from 'styled-components';

export interface IGridProps {
  background?: string;
  justify?: string;
  align?: string;
  padding?: string;
  width?: string;
  mWidth?: string;
  margin?: string;
  height?: string;
  radius?: string;
  columns?: string;
  rows?: string;
  zIndex?: string;
  gap?: string;
  rowGap?: string;
  mobile?: boolean;
  mobileRows?: string;
  mobileColumns?: string;
  mobileGap?: string;
  mobileRowGap?: string;
  extraClass?: string;
}

export const Grid: React.FC<IGridProps> = ({
  children,
  background,
  height = '100%',
  width = '100%',
  // mWidth = "1536px",
  justify = 'center',
  align = 'center',
  padding,
  margin,
  radius,
  columns = 'repeat(12, 1fr)',
  rows = 'auto',
  gap = '40px',
  zIndex = '1',
  rowGap,
  mobile = false,
  mobileRows,
  mobileColumns,
  mobileGap,
  mobileRowGap,
  extraClass = '',
}) => {
  return (
    <GridLayout
      background={background}
      height={height}
      width={width}
      //mWidth={mWidth}
      justify={justify}
      align={align}
      padding={padding}
      margin={margin}
      radius={radius}
      columns={columns}
      rows={rows}
      gap={gap}
      zIndex={zIndex}
      rowGap={rowGap}
      mobile={mobile}
      mobileRows={mobileRows}
      mobileColumns={mobileColumns}
      mobileGap={mobileGap}
      mobileRowGap={mobileRowGap}
      className={`max-w-screen-2xl mx-auto flex justify-center flex-col lg:flex-row  md:px- ${extraClass}`}
    >
      {children}
    </GridLayout>
  );
};

export interface IGridLayoutProps {
  background?: string;
  justify?: string;
  align?: string;
  padding?: string;
  width?: string;
  mWidth?: string;
  margin?: string;
  height?: string;
  radius?: string;
  columns: string;
  rows: string;
  gap: string;
  zIndex: string;
  rowGap?: string;
  mobile: boolean;
  mobileRows?: string;
  mobileColumns?: string;
  mobileGap?: string;
  mobileRowGap?: string;
}

export const GridLayout = styled.div<IGridLayoutProps>`
  display: grid;
  position: relative;

  ${({
    columns,
    rows,
    gap,
    rowGap,
    background,
    width,
    mWidth,
    height,
    margin,
    padding,
    radius,
    zIndex,
  }) =>
    css`
      grid-template-columns: ${columns};
      grid-template-rows: ${rows};
      grid-column-gap: ${gap};
      z-index: ${zIndex};

      ${rowGap && `grid-row-gap: ${rowGap};`};
      ${background && `background: ${background};`};
      ${width && `width: ${width};`};
      ${mWidth && `max-width: ${mWidth};`};
      ${height && `height: ${height};`};
      ${margin && `margin: ${margin};`};
      ${radius && `border-radius: ${radius};`};
      ${padding && `padding: ${padding};`};
    `};

  /**
    Mobile
    */
  ${({
    mobile,
    mobileRows,
    rows,
    mobileColumns,
    columns,
    mobileGap,
    gap,
    mobileRowGap,
  }) =>
    mobile &&
    css`
      @media only screen and (max-width: 475px) {
        grid-template-rows: ${mobileRows || rows};
        grid-template-columns: ${mobileColumns || columns};
        grid-column-gap: ${mobileGap || gap};
        ${mobileRowGap && `grid-row-gap:${mobileRowGap};`}
      }
    `}
`;

export interface IGridChildProps {
  justify?: string;
  align?: string;
  direction?: string;
  padding?: string;
  width?: string;
  minWidth?: string;
  margin?: string;
  height?: string;
  radius?: string;
  background?: string;
  column?: string;
  columnStart?: string;
  columnEnd?: string;
  row?: string;
  rowStart?: string;
  rowEnd?: string;
  mobile?: boolean;
  mobileColumn?: string;
  mobileColumnStart?: string;
  mobileColumnEnd?: string;
  mobileRowStart?: string;
  mobileRowEnd?: string;
  extraClass?: string;
}

export const GridChild: React.FC<IGridChildProps> = ({
  children,
  height = '100%',
  width = '100%',
  minWidth,
  justify = 'center',
  align = 'center',
  direction,
  padding,
  margin,
  radius,
  background,
  column,
  columnStart,
  columnEnd,
  row,
  rowStart,
  rowEnd,
  mobile = false,
  mobileColumn,
  mobileColumnStart,
  mobileColumnEnd,
  mobileRowStart,
  mobileRowEnd,
  extraClass,
}) => {
  return (
    <GridChildLayout
      height={height}
      width={width}
      minWidth={minWidth}
      justify={justify}
      align={align}
      padding={padding}
      margin={margin}
      direction={direction}
      radius={radius}
      background={background}
      column={column}
      columnStart={columnStart}
      columnEnd={columnEnd}
      row={row}
      rowStart={rowStart}
      rowEnd={rowEnd}
      mobile={mobile}
      mobileColumn={mobileColumn}
      mobileColumnStart={mobileColumnStart}
      mobileColumnEnd={mobileColumnEnd}
      mobileRowStart={mobileRowStart}
      mobileRowEnd={mobileRowEnd}
      className={extraClass}
    >
      {children}
    </GridChildLayout>
  );
};

export interface IGridChildLayoutProps {
  justify?: string;
  align?: string;
  padding?: string;
  width?: string;
  minWidth?: string;
  margin?: string;
  height?: string;
  background?: string;
  radius?: string;
  column?: string;
  columnStart?: string;
  columnEnd?: string;
  row?: string;
  rowStart?: string;
  rowEnd?: string;
  direction?: string;
  mobile?: boolean;
  mobileColumn?: string;
  mobileColumnStart?: string;
  mobileColumnEnd?: string;
  mobileRowStart?: string;
  mobileRowEnd?: string;
}

export const GridChildLayout = styled.div<IGridChildLayoutProps>`
  display: flex;

  ${({
    justify,
    align,
    background,
    column,
    columnStart,
    columnEnd,
    row,
    rowStart,
    rowEnd,
    direction,
    width,
    minWidth,
    height,
    margin,
    padding,
    radius,
  }) => css`
    justify-content: ${justify};
    align-items: ${align};
    ${column && `grid-column: ${column};`};
    ${columnStart && `grid-column-start: ${columnStart};`};
    ${columnEnd && `grid-column-end: ${columnEnd};`};
    ${row && `grid-row: ${row};`}
    ${rowStart && `grid-row-start: ${rowStart};`};
    ${rowEnd && `grid-row-end: ${rowEnd};`};
    ${direction && `flex-direction: ${direction};`};
    ${width && `width: ${width};`};
    ${minWidth && `min-width: ${minWidth};`};
    ${height && `height: ${height};`};
    ${margin && `margin: ${margin};`};
    ${padding && `padding: ${padding};`};
    ${background && `background: ${background};`}
    ${radius && `border-radius: ${radius};`}
  `};

  ${({
    mobile,
    mobileColumn,
    mobileColumnStart,
    mobileColumnEnd,
    mobileRowStart,
    mobileRowEnd,
  }) =>
    mobile &&
    css`
      @media only screen and (max-width: 475px) {
        ${mobileColumn && `grid-column: ${mobileColumn};`};
        ${mobileColumnStart && `grid-column-start: ${mobileColumnStart};`};
        ${mobileColumnEnd && `grid-column-end: ${mobileColumnEnd};`};
        ${mobileRowStart && `grid-row-start: ${mobileRowStart};`};
        ${mobileRowEnd && `grid-row-end: ${mobileRowEnd};`};
      }
    `};
`;
