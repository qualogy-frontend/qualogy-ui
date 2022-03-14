import React from 'react';
import { ButtonTypeMapper } from '../Button';

/**
 * Map of button styles
 */
const AnchorMap = {
  ...ButtonTypeMapper,
  default: 'text-primary font-bold',
};

export interface IAnchorProps {
  children?: React.ReactNode;
  action?: () => void;
  type?: keyof typeof AnchorMap;
  disabled?: boolean;
  link?: string;
  active?: boolean;
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  color?: string;
  extraClasses?: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
}

/**
 * Anchor component
 * @type Is used to change the look of the component
 * @returns React component
 */
export const Anchor: React.FC<IAnchorProps> = ({
  children,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  action = () => {},
  disabled,
  type = 'default',
  extraClasses,
  link = '',
  target = '_self',
}) => {
  const AnchorType: any = AnchorMap[type];

  return (
    <a
      href={link}
      className={`${AnchorType} ${extraClasses} ${
        disabled ? 'opacity-50' : 'opacity-100'
      }`}
      onClick={() => action()}
      target={target}
    >
      {children}
    </a>
  );
};
