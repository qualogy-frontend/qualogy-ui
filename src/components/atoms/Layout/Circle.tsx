import styled, { css, keyframes } from 'styled-components';
import { breakPoints } from '../../../utils';

export interface ICircleProps {
  color: string;
  //
  top?: string;
  smTop?: string;
  mdTop?: string;
  lgTop?: string;
  xlTop?: string;
  xl2Top?: string;
  //
  left?: string;
  smLeft?: string;
  mdLeft?: string;
  lgLeft?: string;
  xlLeft?: string;
  xl2Left?: string;
  //
  width?: string;
  height?: string;
  smWidth?: string;
  smHeight?: string;
  mdWidth?: string;
  mdHeight?: string;
  lgWidth?: string;
  lgHeight?: string;
  xlWidth?: string;
  xlHeight?: string;
  xl2Width?: string;
  xl2Height?: string;
  //
  right?: string;
  smRight?: string;
  mdRight?: string;
  lgRight?: string;
  xlRight?: string;
  xl2Right?: string;

  bottom?: string;
  //
  animate?: boolean;
}

const moveAnimation = keyframes`
  from {
      transform: translateX(-10%);
    }
  to {
      transform: translateX(10%);
    }
`;

export const Circle = styled.span<ICircleProps>`
  position: absolute;
  border-radius: 50%;

  ${({
    width,
    height,
    smWidth,
    smHeight,
    mdWidth,
    mdHeight,
    lgWidth,
    lgHeight,
    xlWidth,
    xlHeight,
    xl2Width,
    xl2Height,
    color,
    top,
    smTop,
    mdTop,
    lgTop,
    xlTop,
    xl2Top,
    left,
    smLeft,
    mdLeft,
    lgLeft,
    xlLeft,
    xl2Left,
    right,
    smRight,
    mdRight,
    lgRight,
    xlRight,
    xl2Right,
    bottom,
  }) => css`
    width: ${width};
    max-width: 100%;
    height: ${height};
    border: 1px solid ${color};

    ${top && `top: ${top};`}
    ${left && `left: ${left};`}
    ${right && `right: ${right};`}
    ${bottom && `bottom: ${bottom};`}

    @media (min-width: ${breakPoints.sm}) {
      ${smLeft && `left: ${smLeft};`}
      ${smRight && `right: ${smRight};`}
      ${smTop && `top: ${smTop};`}
      ${smWidth && `width: ${smWidth};`}
      ${smHeight && `height: ${smHeight};`}
    }

    @media (min-width: ${breakPoints.md}) {
      ${mdLeft && `left: ${mdLeft};`}
      ${mdRight && `right: ${mdRight};`}
      ${mdTop && `top: ${mdTop};`}
      ${mdWidth && `width: ${mdWidth};`}
      ${mdHeight && `height: ${mdHeight};`}
    }

    @media (min-width: ${breakPoints.lg}) {
      ${lgLeft && `left: ${lgLeft};`}
      ${lgRight && `right: ${lgRight};`}
      ${lgTop && `top: ${lgTop};`}
      ${lgWidth && `width: ${lgWidth};`}
      ${lgHeight && `height: ${lgHeight};`}
    }

    @media (min-width: ${breakPoints.xl}) {
      ${xlLeft && `left: ${xlLeft};`}
      ${xlRight && `right: ${xlRight};`}
      ${xlTop && `top: ${xlTop};`}
      ${xlWidth && `width: ${xlWidth};`}
      ${xlHeight && `height: ${xlHeight};`}
    }

    @media (min-width: ${breakPoints.xl2}) {
      ${xl2Left && `left: ${xl2Left};`}
      ${xl2Right && `right: ${xl2Right};`}
      ${xl2Top && `top: ${xl2Top};`}
      ${xl2Width && `width: ${xl2Width};`}
      ${xl2Height && `height: ${xl2Height};`}
    }
  `}

  ${(props) =>
    props.animate &&
    css`
      animation-name: ${moveAnimation};
      animation-duration: 40s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    `}
`;
