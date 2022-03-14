import React, { FC } from 'react';

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
        <h1 className="text-center text-white">{title}</h1>
        {children}
      </div>
    </div>
  );
};
