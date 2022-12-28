import { IBook } from "./IBook";

export type ICategories = {
  id: number;
  categoryName: string;
  books: { [string]: IBook };
};
