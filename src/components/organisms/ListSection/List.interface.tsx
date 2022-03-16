// Updated the type

export interface IListProps {
  id: number;
  title: string;
  description: string | null;
  list: {
    id: number;
    title: string | null;
    description: string | null;
    item: {
      id: number;
      title: string | null;
      content: string | null;
    }[];
  }[];
}
