import { axiosClint } from "@/lib/api/axiosClint";
import { CategoriesType } from "@/types/CategoriesType";
import { FilltersType } from "@/types/FilltersType";
import { ProductType } from "@/types/ProductsListTypes";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
async function fetchData() {
  try {
    const res = await axiosClint.get("/Products");
    return res.data.Products;
  } catch (err: any) {
    console.log(err);

    throw err;
  }
}

export default function useProducts(
  category: CategoriesType,
  fillters?: FilltersType,
  q?: string
) {
  const { data = [], ...rest } = useQuery<ProductType[]>({
    queryKey: ["Products"],
    queryFn: fetchData,
  });

  const products = useMemo(() => {
    if (data.length <= 0) return [];
    if (category === "All") {
      return q
        ? data.filter((product) =>
            product.title.toLocaleLowerCase().includes(q.toLocaleLowerCase())
          )
        : [];
    } else return data.filter((product) => product.category.name === category);
  }, [data, category]);

  return { products, ...rest };
}
