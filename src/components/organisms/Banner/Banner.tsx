import React, { FC } from 'react';
import { H1Tag } from '../../atoms';

export interface IBannerProps {
  title?: string;
}

export const Banner: FC<IBannerProps> = ({
  title = 'Met welke functie ga jij de volgende stap maken?',
  children,
}) => {
  return (
    <div className="banner h-64 md:h-72 lg:h-96 w-full bg-primary bg-home-banner bg-cover --tw-bg-opacity: 0.3; rounded px-5 lg:px-0">
      <div className="banner__content w-full  max-w-screen-md mx-auto flex flex-col justify-center items-center">
        <H1Tag classes="text-center" color="text-white">
          {title}
        </H1Tag>
        {children}
      </div>
    </div>
  );
};
