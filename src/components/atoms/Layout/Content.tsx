import styled, { css } from 'styled-components';

export interface IContentProps {
  background?: string;
  backgroundCurved?: string;
  curved?: boolean;
  curverReverse?: boolean;
  curvedTop?: boolean;
  curvedHeight?: string;
  height?: string;
  mHeight?: string;
  width?: string;

  justify?: string;
  align?: string;
  overflow?: string;
  overflowX?: string;
  overflowY?: string;
}

export const Content = styled.section<IContentProps>`
  position: relative;
  display: flex;
  ${({
    background,
    curved,
    width,
    justify,
    align,
    height,
    mHeight,
    overflow,
    overflowY,
  }) => css`
    justify-content: ${justify || 'center'};
    align-items: ${align || 'flex-start'};
    width: ${width || '80%'};
    height: ${height || 'auto'};
    min-height: ${mHeight || '70vh'};
    overflow: ${overflow || 'hidden'};
    ${overflowY && `overflow-y: ${overflowY};`};
    ${background && !curved && `background: ${background};`};
  `};

  ${(props) =>
    props.overflowX &&
    !props.curved &&
    css`
      overflow-x: ${props.overflowX};
      scroll-behavior: smooth;
      scroll-snap-type: x mandatory;
    `};

  ${(props) =>
    props.curved &&
    css`
      &:before {
        content: ' ';
        position: absolute;
        display: flex;
        background: ${props.background};
        border-radius: 0 0 50% 50%/0 0 100% 100%;
        transform: scaleX(4);
        width: 100%;
        height: ${props.curvedHeight || '100%'};
        ${props.curverReverse &&
        css`
          transform: scaleX(4) rotate(180deg);
        `}
      }
    `}

  ${(props) =>
    props.curvedTop &&
    css`
      padding-top: 100px;

      &:before {
        content: ' ';
        position: absolute;
        display: flex;
        background: ${props.backgroundCurved};
        border-radius: 0 0 100% 100%/0 0 100% 100%;
        transform: scaleX(1.3);
        width: 100%;
        height: 100px;
        top: 0;
      }
    `}

    @media only screen and (max-width: 475px) {
    min-height: ${(props) => props.height};
    height: initial;
  }

  &#our-offers {
    :before {
      content: ' ';
      position: absolute;
      bottom: 0;
      background: linear-gradient(transparent, white 20%);
      width: 100%;
      height: 40vh;
      z-index: 10;
    }
  }
`;
