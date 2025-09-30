import { axiosClint } from "@/lib/api/axiosClint";
import { useQuery } from "@tanstack/react-query";
async function fetchData() {
  try {
    const res = await axiosClint.get("/Categories");
    console.log(res.data.categories);
    return res.data;
  } catch (err: any) {
    throw err;
  }
}

export default function useCategories() {
  return useQuery({ queryKey: ["Categories"], queryFn: fetchData });
}
