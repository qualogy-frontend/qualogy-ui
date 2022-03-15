import styled, { css, keyframes } from 'styled-components';
import { GridChildLayout } from '../Layout/Grid';

export interface IImageBaseProps {
  top?: number;
  alternate?: number;
  animSpeed?: string;
  padding?: string;
  width?: string;
  height?: string;
  bounce?: boolean;
  margin?: string;
}

export const ImageBase = styled.img<IImageBaseProps>`
  ${({ padding, margin, width, height }) => css`
    ${padding && `padding: ${padding || '20px'};`}
    ${margin && `margin: ${margin};`}
    ${width && `width: ${width || '150px'};`}
    ${height && `height: ${height || '150px'};`}
  `}
`;

const moveAnimation = (y: number, x: number) => keyframes`  
  0% { top: ${y}px; }
  50% { top: ${x}px; }
  100% { top: ${y}px; }
`;

export const ImageSquare = styled(ImageBase)`
  background: #ffffff;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  object-fit: contain;
  ${({ padding, margin, width, height }) => css`
    padding: ${padding || '20px'};
    margin: ${margin};
    width: ${width || '150px'};
    height: ${height || '150px'};
  `}

  /* max-height: 107px; */
  ${({ top, bounce }) =>
    !bounce &&
    top &&
    css`
      position: relative;
      top: ${top}px;
    `}

  ${({ top, bounce, alternate, animSpeed }) =>
    top &&
    bounce &&
    alternate &&
    css`
      position: relative;
      /* top: ${top}; */
      animation-name: ${moveAnimation(top, alternate)};
      animation-duration: ${animSpeed || '5s'};
      animation-iteration-count: infinite;
    `}

    @media (max-width: 475px) {
    top: 0px;
  }
`;

export const ImageGrid = styled(GridChildLayout)``;
