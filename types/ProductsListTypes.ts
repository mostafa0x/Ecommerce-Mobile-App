import { OneCategoryType } from "./CategoriesType";
import { FillterProdcutsType } from "./FillterProdcutsType";

export interface ProductsListTypes {
  calledFrom: "Home" | "fillter";
  isLoading: boolean;
  data: ProductType[];
  fillter?: FillterProdcutsType;
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
  __v?: number;
}
