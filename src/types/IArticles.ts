export type IArticles = {
  id: number;
  title: string;
  tag: string;
  image: string | null;
  author: string;
  date: string | null;
};
export type IBlog = {
  author: string;
  authorImage: string;
  title: string;
};

export type IAuthor = {
  author: string;
  authorImage: string;
};
