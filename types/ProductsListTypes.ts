import { OneCategoryType } from "./CategoriesType";

export interface ProductsListTypes {
  calledFrom: "Home" | "fillter";
  isLoading: boolean;
  data: ProductType[];
}

export interface ProductType {
  category: OneCategoryType;
  _id?: string;
  id: number;
  title: string;
  slug?: string;
  price: number;
  description: string;
  images: string[];
  creationAt?: string;
  updatedAt?: string;
  stock: number;
  DisPercentage: number;
  priceAfterDis: number;
  _V?: number;
}
