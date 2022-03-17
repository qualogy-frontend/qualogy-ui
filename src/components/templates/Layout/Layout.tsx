import React, { FC } from 'react';
import styled from 'styled-components';

export interface ILayoutProps {
  meta?: React.ReactNode;
  extraClass?: string;
}

export const Layout: FC<ILayoutProps> = ({
  meta,
  extraClass = '',
  children,
}) => {
  return (
    <>
      {meta}
      <Main className={extraClass}>{children}</Main>
      {/* <Footer backgroundCurved="#ede7e0" /> */}
    </>
  );
};

const Main = styled.main`
  width: 100%;
  background-color: #ede7e0;

  .blog__post {
    h1,
    p {
      font-family: PT Sans, sans-serif;
      margin: 8px 0;
    }
    h1 {
      font-size: 26px;
      color: #231f20;
      font-weight: bold;
    }
    p {
      font-size: 18px;
      color: #848278;
    }

    ul {
      padding-left: 16px;
      margin: 8px 0;
      li {
        color: #c52c23;
        font-size: 18px;
        line-height: 30px;
        list-style: disc;
      }
    }

    blockquote {
      font-style: italic;
    }

    pre {
      width: 100%;
    }

    @media (max-width: 475px) {
      pre {
        max-width: 100%;
      }
    }
  }
`;
