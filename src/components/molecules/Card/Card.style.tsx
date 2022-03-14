import styled, { css } from 'styled-components';

type CardLayoutProps = {
  width?: string;
  imgWidth?: string;
};

export const ImageWrap = styled.div`
  img {
    min-width: 400px;
  }
  @media (max-width: 1024px) {
    position: relative;
    width: 100%;
    max-width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 6px;
    margin-bottom: 0px;
  }
`;

export const CardLayout = styled.div<CardLayoutProps>`
  position: relative;
  @media (max-width: 1024px) {
    margin-bottom: 60px;
    img {
      width: 100%;
      max-width: 100%;
      position: absolute;
    }
  }
  &.shadow {
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25);
  }

  &.card__small {
    min-width: 250px;
    margin: 0 16px;

    .card__text {
      justify-content: center;
      align-items: center;
      height: 100%;
      max-width: 250px;
      right: 0;
      top: 0;
    }
  }

  &.card__post {
    /* background-color: white; */
    max-height: 500px;
    /* max-width: 350px; */
    ${(props) =>
      props.width &&
      css`
        width: ${props.width};
      `}
    flex-direction: column;
    margin: 0;
    justify-content: flex-start;
    align-items: flex-start;
    img {
      width: ${(props) => props.imgWidth || '100%'};
      border-radius: 4px;
      min-height: 225px;
      max-height: 225px;
      object-fit: cover;
      @media (max-width: 1024px) {
        width: 100%;
        max-width: 100%;
        position: relative;
      }
    }
    .post__body {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  &.hover__text {
    .card__text {
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.5s ease;
    }
    &:hover {
      .card__text {
        pointer-events: initial;
        opacity: 1;
      }
    }
  }
`;

export const CardText = styled.div`
  bottom: -40px;
  position: absolute;
  background-color: white;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 40px;
  max-width: 400px;

  @media (max-width: 1280px) {
    width: 100%;
  }

  @media (max-width: 1024px) {
    top: 100%;
    transform: translateY(-50%);
    bottom: auto;
    max-width: 100%;
  }

  @media (max-width: 800px) {
    position: static;
    margin-top: -60px;
    left: auto;
    right: auto;
    bottom: auto;
    top: auto;
    transform: translateY(0%);
  }
`;
