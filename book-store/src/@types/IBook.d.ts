export type IBook = {
  id: string | number;
  bookName: string;
  bookCover: ImageSourcePropType | undefined;
  rating: number;
  language: string;
  pageNo: number;
  author: string;
  genre: string[];
  readed: string;
  description: string;
  backgroundColor: string;
  navTintColor: string;
  completion: string;
  lastRead: string;
};
