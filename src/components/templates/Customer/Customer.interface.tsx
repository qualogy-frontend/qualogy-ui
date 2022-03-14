import { ImageProps } from '../About';

interface DataProps {
  id: number;
  content: string;
  customers: ImageProps[];
}

export interface ICustomerInterface {
  data: DataProps;
  contentAlign?: string;
  imageBase?: string;
}
