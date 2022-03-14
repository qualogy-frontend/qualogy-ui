import React, { FC } from 'react';
import {
  AlbumIcon,
  AppsIcon,
  BrowserIcon,
  ChartIcon,
  CloudIcon,
  ServerIcon,
  SystemIcon,
} from './Icons.SVG';

export const IconMapper: any = {
  apps: AppsIcon,
  album: AlbumIcon,
  browser: BrowserIcon,
  chart: ChartIcon,
  cloud: CloudIcon,
  server: ServerIcon,
  system: SystemIcon,
};

export interface IIconProps {
  icon: keyof typeof IconMapper;
  extraClasses: string;
  color?: string;
}

export const Icon: FC<IIconProps> = ({
  icon = 'apps',
  extraClasses,
  color,
}) => {
  const SelectedIcon: any = IconMapper[icon];

  return <SelectedIcon color={color} extraClasses={`${extraClasses}`} />;
};
