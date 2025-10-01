import { OneCategoryType } from "./CategoriesType";
import { ProductType } from "./ProductsListTypes";

export interface MainSliceType {
  categories: OneCategoryType[];
  isLoadingCategories: boolean;
  products: ProductType[];
  isLoadingProducts: boolean;
  prdouctById: ProductType | undefined;
  isLoadingPrdouctById: boolean;
}
