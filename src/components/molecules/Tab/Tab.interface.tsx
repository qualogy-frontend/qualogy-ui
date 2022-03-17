import { IButtonProps } from '../../atoms';

interface dataType {
  title?: string;
  content?: string;
  buttons: IButtonProps[];
}

export interface ITabProps {
  data: dataType;
}
