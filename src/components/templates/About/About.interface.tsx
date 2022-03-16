import { IButtonProps } from '../../atoms/Button';

interface ImageType {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: null | string;
  url: string;
}

interface Formats {
  thumbnail: ImageType;
  large: ImageType;
  medium: ImageType;
  small: ImageType;
}

export interface ImageProps {
  id: number;
  url: string;
  alternativeText: string;
  name?: string;
  caption?: string;
  width?: number;
  height?: number;
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  formats?: Formats | null;
}

interface Employee {
  content: string | null;
  button: IButtonProps | null;
  image: ImageProps;
  reversed: boolean;
}

interface DataProps {
  id: number;
  title: string;
  sub: string;
  content: string;
  employee: Employee;
  button?: IButtonProps;
}

export interface IAboutInterface {
  data: DataProps;
  imageBase: string;
}
