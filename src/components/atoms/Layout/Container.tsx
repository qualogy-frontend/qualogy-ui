import React from 'react';

export interface IContainerProps {
  extraClasses?: string;
}

export const Container: React.FC<IContainerProps> = ({
  children,
  extraClasses = '',
}) => {
  return <div className={`container ${extraClasses}`}>{children}</div>;
};
