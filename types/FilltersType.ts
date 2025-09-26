import { CategoriesType } from "./CategoriesType";

export interface FilltersType {
  price: {
    from: number;
    to: number;
  };
  onSale: boolean;
  category: CategoriesType;
  type: TypeFillter;
}

export type TypeFillter = "on Sale" | "Sort by" | "Price";
