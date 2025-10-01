import { axiosClint } from "@/lib/api/axiosClint";
import fillterByCategory from "@/service/fillterByCategory";
import fillterByPrice from "@/service/fillterByPrice";
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
      if (q) {
        if (fillters) {
          return data.filter((product) => {
            const sortByCategory = fillterByCategory(fillters, product);
            const sortByPrice = fillterByPrice(fillters, product);
            return (
              product.title
                .toLocaleLowerCase()
                .includes(q.toLocaleLowerCase()) &&
              sortByPrice &&
              sortByCategory
            );
          });
        } else {
          return data.filter((product) =>
            product.title.toLocaleLowerCase().includes(q.toLocaleLowerCase())
          );
        }
      }
    } else {
      console.log("x");

      return data.filter((product) => product.category.name === category);
    }
    return [];
    //   return q
    //     ? fillters
    //       ? data.filter(
    //           (product) =>
    //             product.title
    //               .toLocaleLowerCase()
    //               .includes(q.toLocaleLowerCase()) &&
    //             fillters.category !== "All" &&
    //             product.category.name === fillters.category &&
    //             product.priceAfterDis > fillters.price.from &&
    //             fillters.price.to > 0 &&
    //             product.priceAfterDis <= fillters.price.to
    //         )
    //       : data.filter((product) =>
    //           product.title.toLocaleLowerCase().includes(q.toLocaleLowerCase())
    //         )
    //     : [];
    // } else return data.filter((product) => product.category.name === category);
  }, [data, category, q]);

  return { products, ...rest };
}
