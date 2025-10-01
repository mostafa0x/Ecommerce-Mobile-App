import { FilltersType } from "@/types/FilltersType";
import { ProductType } from "@/types/ProductsListTypes";

export default function fillterByCategory(
  fillters: FilltersType,
  product: ProductType
) {
  return fillters.category === "All"
    ? product.category.name !== fillters.category
    : product.category.name === fillters.category;
}
