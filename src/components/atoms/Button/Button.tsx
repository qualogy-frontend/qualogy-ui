import React from 'react';
/**
 * Map of button styles
 */
export const ButtonTypeMapper = {
  default: '',
  gradient: 'text-white rounded shadow p-4 bg-gradient-card',
  tag: 'w-full rounded-2xl p-1 border w-full border-black',
  light: 'p-4 rounded bg-white text-black',
  line: 'p-4 border border-gray-400 text-gray-400 rounded',
  blank: '',
  menu: 'text-white mx-4 relative',
  'dropdown-menu': 'right-0',
  toggle: 'text-white',
  'toggle-inactive': 'text-gray-500',
};

export interface IButtonProps {
  children?: React.ReactNode;
  action?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: keyof typeof ButtonTypeMapper;
  disabled?: boolean;
  link?: string;
  active?: boolean;
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  color?: string;
  extraClasses?: string;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  action = () => {},
  disabled,
  type = 'default',
  extraClasses = '',
}) => {
  const ButtonType: any = ButtonTypeMapper[type];
  //const isALink: string = link.length > 0 ? "a" : "button";

  return (
    <button
      onClick={action}
      disabled={disabled}
      className={`${ButtonType} ${extraClasses} ${
        disabled ? 'opacity-50' : 'opacity-100'
      }`}
    >
      {children}
    </button>
  );
};
