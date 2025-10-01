export type CategoriesType =
  | "All"
  | "Electronics"
  | "Furniture"
  | "Clothes"
  | "Shoes"
  | "Miscellaneous";

export interface OneCategoryType {
  _id?: string;
  id: number;
  name: string;
  slug?: string;
  image: string;
  creationAt?: string;
  updatedAt?: string;
}
