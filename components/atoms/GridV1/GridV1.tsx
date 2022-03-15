import React, { FC } from 'react';

export interface IGridV1Props {
  extraClass?: string;
  gapCols?: string;
  gridCols?: string;
  smGridCols?: string;
  mdGridCols?: string;
  lgGridCols?: string;
  xlGridCols?: string;
  xxlGridCols?: string;
  gapRows?: string;
  gridRows?: string;
  smGridRows?: string;
  mdGridRows?: string;
  lgGridRows?: string;
  xlGridRows?: string;
  xxlGridRows?: string;
  //
  direction?: string;
  lgDirection?: string;

  mW?: string;
}

export const GridV1: FC<IGridV1Props> = ({
  children,
  extraClass,
  //
  gapCols = 'gap-x-9',
  gridCols = 'grid-cols-12',
  smGridCols = '',
  mdGridCols = '',
  lgGridCols = '',
  xlGridCols = '',
  xxlGridCols = '',
  //
  gapRows = 'gap-y-none',
  gridRows = '',
  smGridRows = '',
  mdGridRows = '',
  lgGridRows = '',
  xlGridRows = '',
  xxlGridRows = '',
  //
  direction = 'flex-col',
  lgDirection = 'lg:flex-row',
  //
  mW = 'max-w-screen-2xl',
}) => {
  return (
    <div
      className={`mx-auto flex justify-center ${mW} ${lgDirection} ${gapCols} ${gridCols} ${smGridCols} ${mdGridCols} ${lgGridCols} ${xlGridCols} ${xxlGridCols} ${gapRows} ${gridRows} ${smGridRows} ${mdGridRows} ${lgGridRows} ${xlGridRows} ${xxlGridRows} ${direction} ${extraClass}`}
    >
      {children}
    </div>
  );
};
