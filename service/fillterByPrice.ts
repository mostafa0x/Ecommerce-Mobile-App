import { FilltersType } from "@/types/FilltersType";
import { ProductType } from "@/types/ProductsListTypes";

export default function fillterByPrice(
  fillters: FilltersType,
  product: ProductType
) {
  const from = Number(fillters.price.from ?? 0);
  const to = Number(fillters.price.to ?? 0);
  const price = Number(product.priceAfterDis ?? 0);

  const filterByPrice = price >= from && (to === 0 || price <= to);
  return filterByPrice;
}
