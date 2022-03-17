import { ImageProps } from '../../templates';

export interface ITechProps {
  data: {
    title: string;
    content: string;
    images: ImageProps[];
  };
  imageBase?: string;
}
