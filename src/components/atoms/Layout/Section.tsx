import React from 'react';
import { breakPoints } from '../../../utils';

import { FC } from 'react';
import styled from 'styled-components';

export const createdResponsiveHeights = (heights?: string) => {
  const curvedheights = { xs: '', sm: '', md: '', lg: '', xl: '', '2xl': '' };
  if (heights) {
    const rawHeights = heights.split(' ');

    rawHeights.forEach((item: string) => {
      switch (true) {
        case item.includes('xs'):
          curvedheights.xs = item.split('xs:')[1];
          break;
        case item.includes('sm'):
          curvedheights.sm = item.split('sm:')[1];
          break;
        case item.includes('md'):
          curvedheights.md = item.split('md:')[1];
          break;
        case item.includes('lg'):
          curvedheights.lg = item.split('lg:')[1];
          break;

        case item.includes('2xl'):
          curvedheights['2xl'] = item.split('2xl:')[1];
          break;
        case item.includes('xl'):
          curvedheights.xl = item.split('xl:')[1];
          break;
      }
    });
  }
  return curvedheights;
};

export interface ISectionInterface {
  backgroundColor?: string;
  height?: string;
  width?: string;
  mt?: string;
  mx?: string;
  mdMt?: string;
  pt?: string;
  mdPt?: string;
  pb?: string;
  mdPb?: string;
  px?: string;
  mPx?: string;
  mb?: string;
  mdMb?: string;
  mW?: string;
  justify?: string;
  id?: string;
  extraClass?: string;
  curvedHeight?: string;
  curvedHeightResponsive?: string;
  curvedBackground?: string;
  direction?: string;
  lgDirection?: string;
}

export const Section: FC<ISectionInterface> = ({
  children,
  backgroundColor = 'bg-transparent',
  curvedBackground = '',
  // height,
  curvedHeight,
  curvedHeightResponsive,
  width = 'w-full',
  mt = 'mt-20',
  // mx = 'mx-auto',
  mdMt = 'md:mt-24',
  // mb = 'mb-none',
  mdMb = 'md:mb-20',
  pt = 'pt-none',
  mdPt = 'md:pt-none',
  pb = 'pb-none',
  mdPb = 'md:pb-none',
  px = 'px-5',
  mPx = 'md:px-10',
  mW = 'max-w-screen-2xl',
  justify = 'justify-center',
  id,
  direction = 'flex-col',
  lgDirection = 'lg:flex-row',
  extraClass = '',
}) => {
  const responsiveHeights = createdResponsiveHeights(curvedHeightResponsive);
  return (
    <SectionLayout
      className={`relative flex mx-auto ${width} ${mW} ${px} ${mPx} ${pt} ${mdPt} ${pb} ${mdPb} ${mt} ${mdMt} ${mdMb} ${justify} ${direction} ${lgDirection} ${backgroundColor} ${extraClass} ${curvedHeightResponsive}`}
      curvedHeight={curvedHeight}
      curvedBackground={curvedBackground}
      responsiveHeights={responsiveHeights}
      id={id}
    >
      {children}
    </SectionLayout>
  );
};

export interface ISectionLayoutProps {
  curvedBackground?: string;
  curvedHeight?: string;
  responsiveHeights: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
}

export const SectionLayout = styled.section<ISectionLayoutProps>`
  &.curved {
    overflow-x: hidden;
    &:before {
      content: ' ';
      top: 0;
      position: absolute;
      display: flex;
      background: ${(props) =>
        props.curvedBackground ||
        'radial-gradient(50% 180.59% at 0% 96.42%,#E56C2A 70%,#C52C23 100%),#C52C23'};
      border-radius: 0 0 50% 50%/0 0 100% 100%;
      transform: scaleX(4);
      width: 100%;
      height: ${(props) => props.curvedHeight || '100%'};

      @media (min-width: ${breakPoints.sm}) {
        height: ${(props) =>
          props.responsiveHeights.sm.length > 0
            ? props.responsiveHeights.sm
            : ''};
      }

      @media (min-width: ${breakPoints.md}) {
        height: ${(props) =>
          props.responsiveHeights.md.length > 0
            ? props.responsiveHeights.md
            : ''};
      }

      @media (min-width: ${breakPoints.lg}) {
        height: ${(props) =>
          props.responsiveHeights.lg.length > 0
            ? props.responsiveHeights.lg
            : ''};
      }

      @media (min-width: ${breakPoints.xl}) {
        height: ${(props) =>
          props.responsiveHeights.xl.length > 0
            ? props.responsiveHeights.xl
            : ''};
      }

      @media (min-width: ${breakPoints.xl2}) {
        height: ${(props) =>
          props.responsiveHeights['2xl'].length > 0
            ? props.responsiveHeights['2xl']
            : ''};
      }
    }
  }

  &.curved-post {
    &:before {
      height: ${(props) => props.curvedHeight || '90vh'};
    }
  }

  &.curved-reverse {
    &:before {
      transform: scaleX(4) rotate(180deg);
    }
  }
  &.curved-top {
    &:before {
      content: ' ';
      position: absolute;
      display: flex;
      border-radius: 0 0 100% 100%/0 0 100% 100%;
      transform: scaleX(1.3);
      width: 100%;
      height: 100px;
      top: 0;
    }
  }
`;
