import { axiosClint } from "@/lib/api/axiosClint";
import { useQuery } from "@tanstack/react-query";
async function fetchData() {
  try {
    const res = await axiosClint.get("/Categories");
    console.log();

    return res.data.categories;
  } catch (err: any) {
    console.log(err);

    throw err;
  }
}

export default function useCategories() {
  const { data: categories = [], ...rest } = useQuery({
    queryKey: ["Categories"],
    queryFn: fetchData,
  });
  return { categories, ...rest };
}
