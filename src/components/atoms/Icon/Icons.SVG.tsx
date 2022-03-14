import React, { FC } from 'react';

interface IconProps {
  color?: string;
  extraClasses: string;
}

interface AppIconProps extends IconProps {}

export const AppsIcon: FC<AppIconProps> = ({
  color = '#D53026',
  extraClasses,
}) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${extraClasses}`}
    >
      <path
        d="M9 6.5C9 5.11929 7.88071 4 6.5 4C5.11929 4 4 5.11929 4 6.5C4 7.88071 5.11929 9 6.5 9C7.88071 9 9 7.88071 9 6.5Z"
        stroke={color}
        stroke-width="2"
        stroke-miterlimit="10"
      />
      <path
        d="M18.5 6.5C18.5 5.11929 17.3807 4 16 4C14.6193 4 13.5 5.11929 13.5 6.5C13.5 7.88071 14.6193 9 16 9C17.3807 9 18.5 7.88071 18.5 6.5Z"
        stroke={color}
        stroke-width="2"
        stroke-miterlimit="10"
      />
      <path
        d="M28 6.5C28 5.11929 26.8807 4 25.5 4C24.1193 4 23 5.11929 23 6.5C23 7.88071 24.1193 9 25.5 9C26.8807 9 28 7.88071 28 6.5Z"
        stroke={color}
        stroke-width="2"
        stroke-miterlimit="10"
      />
      <path
        d="M9 16C9 14.6193 7.88071 13.5 6.5 13.5C5.11929 13.5 4 14.6193 4 16C4 17.3807 5.11929 18.5 6.5 18.5C7.88071 18.5 9 17.3807 9 16Z"
        stroke={color}
        stroke-width="2"
        stroke-miterlimit="10"
      />
      <path
        d="M18.5 16C18.5 14.6193 17.3807 13.5 16 13.5C14.6193 13.5 13.5 14.6193 13.5 16C13.5 17.3807 14.6193 18.5 16 18.5C17.3807 18.5 18.5 17.3807 18.5 16Z"
        stroke={color}
        stroke-width="2"
        stroke-miterlimit="10"
      />
      <path
        d="M28 16C28 14.6193 26.8807 13.5 25.5 13.5C24.1193 13.5 23 14.6193 23 16C23 17.3807 24.1193 18.5 25.5 18.5C26.8807 18.5 28 17.3807 28 16Z"
        stroke={color}
        stroke-width="2"
        stroke-miterlimit="10"
      />
      <path
        d="M9 25.5C9 24.1193 7.88071 23 6.5 23C5.11929 23 4 24.1193 4 25.5C4 26.8807 5.11929 28 6.5 28C7.88071 28 9 26.8807 9 25.5Z"
        stroke={color}
        stroke-width="2"
        stroke-miterlimit="10"
      />
      <path
        d="M18.5 25.5C18.5 24.1193 17.3807 23 16 23C14.6193 23 13.5 24.1193 13.5 25.5C13.5 26.8807 14.6193 28 16 28C17.3807 28 18.5 26.8807 18.5 25.5Z"
        stroke={color}
        stroke-width="2"
        stroke-miterlimit="10"
      />
      <path
        d="M28 25.5C28 24.1193 26.8807 23 25.5 23C24.1193 23 23 24.1193 23 25.5C23 26.8807 24.1193 28 25.5 28C26.8807 28 28 26.8807 28 25.5Z"
        stroke={color}
        stroke-width="2"
        stroke-miterlimit="10"
      />
    </svg>
  );
};

interface AlbumIconProps extends IconProps {}

export const AlbumIcon: FC<AlbumIconProps> = ({
  color = '#white',
  extraClasses,
}) => {
  return (
    <svg
      width="32"
      height="34"
      viewBox="0 0 32 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${extraClasses}`}
    >
      <path
        d="M5.80437 11.512H26.1956C27.1922 11.512 28 12.3574 28 13.4003V26.3684C28 27.4113 27.1922 28.2567 26.1956 28.2567H5.80437C4.80785 28.2567 4 27.4113 4 26.3684V13.4003C4 12.3574 4.80785 11.512 5.80437 11.512Z"
        stroke={color}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path d="M23 5.23279H9H23ZM25 8.37243H7H25Z" fill={color} />
      <path
        d="M25 8.37243H7M23 5.23279H9H23Z"
        stroke={color}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
    </svg>
  );
};

interface BrowserIconProps extends IconProps {}

export const BrowserIcon: FC<BrowserIconProps> = ({
  color = '#69CA9D',
  extraClasses,
}) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${extraClasses}`}
    >
      <path
        d="M26 4H6C4.34315 4 3 5.34315 3 7V25C3 26.6569 4.34315 28 6 28H26C27.6569 28 29 26.6569 29 25V7C29 5.34315 27.6569 4 26 4Z"
        stroke={color}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M24.8638 4H7.13625C4.85562 4 3 5.88437 3 8.2V11H4C4 10 5 9 6 9H26C27 9 28 10 28 11H29V8.2C29 5.88437 27.1444 4 24.8638 4Z"
        fill={color}
      />
    </svg>
  );
};

interface ChartIconProps extends IconProps {}

export const ChartIcon: FC<ChartIconProps> = ({
  color = '#F2D458',
  extraClasses,
}) => {
  return (
    <svg
      width="32"
      height="34"
      viewBox="0 0 32 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${extraClasses}`}
    >
      <path
        d="M2 2.09314V30.3499C2 30.6275 2.10536 30.8937 2.29289 31.0899C2.48043 31.2862 2.73478 31.3965 3 31.3965H30"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.75 14.6516H7.25C6.55964 14.6516 6 15.2373 6 15.9598V25.902C6 26.6245 6.55964 27.2102 7.25 27.2102H9.75C10.4404 27.2102 11 26.6245 11 25.902V15.9598C11 15.2373 10.4404 14.6516 9.75 14.6516Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.75 11.512H16.25C15.5596 11.512 15 12.0977 15 12.8201V25.902C15 26.6245 15.5596 27.2102 16.25 27.2102H18.75C19.4404 27.2102 20 26.6245 20 25.902V12.8201C20 12.0977 19.4404 11.512 18.75 11.512Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27.7275 7.32581H25.2275C24.5372 7.32581 23.9775 7.9115 23.9775 8.63399V25.902C23.9775 26.6245 24.5372 27.2102 25.2275 27.2102H27.7275C28.4179 27.2102 28.9775 26.6245 28.9775 25.902V8.63399C28.9775 7.9115 28.4179 7.32581 27.7275 7.32581Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

interface CloudIconProps extends IconProps {}

export const CloudIcon: FC<CloudIconProps> = ({
  color = '#D05BDA',
  extraClasses,
}) => {
  return (
    <svg
      width="32"
      height="34"
      viewBox="0 0 32 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${extraClasses}`}
    >
      <path
        d="M25 15.6982C24.4444 9.84148 20.5625 6.2793 16 6.2793C11.6875 6.2793 8.91 9.43202 8 12.5586C4.25 12.951 1 15.4098 1 19.8844C1 24.2014 4.375 27.2102 8.5 27.2102H24.75C28.1875 27.2102 31 25.4154 31 21.4542C31 17.5415 27.6875 15.8447 25 15.6982Z"
        stroke={color}
        stroke-width="2"
        stroke-linejoin="round"
      />
    </svg>
  );
};

interface ServerIconProps extends IconProps {}

export const ServerIcon: FC<ServerIconProps> = ({
  color = '#E56C2A',
  extraClasses,
}) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${extraClasses}`}
    >
      <path
        d="M16 13C22.6274 13 28 10.7614 28 8C28 5.23858 22.6274 3 16 3C9.37258 3 4 5.23858 4 8C4 10.7614 9.37258 13 16 13Z"
        stroke={color}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M28 13.375C28 16.1363 22.625 18.375 16 18.375C9.375 18.375 4 16.1363 4 13.375M28 18.75C28 21.5113 22.625 23.75 16 23.75C9.375 23.75 4 21.5113 4 18.75"
        stroke={color}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M4 7.95251V24.0475C4 26.7825 9.375 29 16 29C22.625 29 28 26.7825 28 24.0475V7.95251"
        stroke={color}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
    </svg>
  );
};

interface SystemIconProps extends IconProps {}

export const SystemIcon: FC<SystemIconProps> = ({
  color = '#448EC7',
  extraClasses,
}) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${extraClasses}`}
    >
      <path
        d="M12.75 3H4.25C3.55964 3 3 3.55964 3 4.25V12.75C3 13.4404 3.55964 14 4.25 14H12.75C13.4404 14 14 13.4404 14 12.75V4.25C14 3.55964 13.4404 3 12.75 3Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27.75 3H19.25C18.5596 3 18 3.55964 18 4.25V12.75C18 13.4404 18.5596 14 19.25 14H27.75C28.4404 14 29 13.4404 29 12.75V4.25C29 3.55964 28.4404 3 27.75 3Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.75 18H4.25C3.55964 18 3 18.5596 3 19.25V27.75C3 28.4404 3.55964 29 4.25 29H12.75C13.4404 29 14 28.4404 14 27.75V19.25C14 18.5596 13.4404 18 12.75 18Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27.75 18H19.25C18.5596 18 18 18.5596 18 19.25V27.75C18 28.4404 18.5596 29 19.25 29H27.75C28.4404 29 29 28.4404 29 27.75V19.25C29 18.5596 28.4404 18 27.75 18Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
