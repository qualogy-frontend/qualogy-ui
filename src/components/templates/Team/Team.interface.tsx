import { ImageProps } from '../About';
import { IButtonProps } from '../../atoms';

type Employee = {
  image: ImageProps;
  content: string;
  button: IButtonProps | null;
};

type DataProps = {
  title: string;
  employee: Employee[];
};

export interface ITeamProps {
  data: DataProps;
  imageBase?: string;
}
