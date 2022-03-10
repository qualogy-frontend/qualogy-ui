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

export const IconMap: any = {
  apps: AppsIcon,
  album: AlbumIcon,
  browser: BrowserIcon,
  chart: ChartIcon,
  cloud: CloudIcon,
  server: ServerIcon,
  system: SystemIcon,
};

interface Props {
  icon: keyof typeof IconMap;
  extraClasses: string;
  color?: string;
}

export const Icon: FC<Props> = ({ icon = 'apps', extraClasses, color }) => {
  const SelectedIcon: any = IconMap[icon];

  return <SelectedIcon color={color} extraClasses={`${extraClasses}`} />;
};
