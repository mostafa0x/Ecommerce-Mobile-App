import { axiosClint } from "@/lib/api/axiosClint";
import { CategoriesType } from "@/types/CategoriesType";
import { ProductType } from "@/types/ProductsListTypes";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
async function fetchData() {
  try {
    const res = await axiosClint.get("/Products");
    console.log();

    return res.data.Products;
  } catch (err: any) {
    console.log(err);

    throw err;
  }
}

export default function useProducts(category: CategoriesType) {
  const { data = [], ...rest } = useQuery<ProductType[]>({
    queryKey: ["Products"],
    queryFn: fetchData,
  });

  const products = useMemo(() => {
    return data.length > 0
      ? data.filter((product) => product.category.name === category)
      : [];
  }, [data, category]);

  return { products, ...rest };
}
