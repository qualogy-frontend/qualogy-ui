export type CoverImageType = {
  url: string;
};

export type TagType = {
  name: string;
  type: string;
};

export type FormatPictureType = {
  name: string;
  url: string;
};

export type PictureFormatType = {
  thumbnail: FormatPictureType;
  large: FormatPictureType;
  medium: FormatPictureType;
  small: FormatPictureType;
};

export type PictureType = {
  name: string;
  format: PictureFormatType;
  url: string;
};

interface Post {
  id: number;
  title: string;
  date: string;
  slug: string;
  content: string;
  excerpt: string;
  tags: TagType[];
  coverImage: CoverImageType;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export type AuthorType = {
  id: number;
  name: string;
  slug: string;
  about: string;
  picture: PictureType[];
  blog_posts: Post[];
};

export interface IPostInterface extends Post {
  author: AuthorType;
}

type DataProps = {
  allPosts: IPostInterface[];
};
export interface IPostsInterface {
  data: DataProps;
}
