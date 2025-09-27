import { inputTypes } from "@/types/CustomInputType";
import { FilltersType } from "@/types/FilltersType";

export function SetFilltersValues(
  type: inputTypes,
  setFillters: React.Dispatch<React.SetStateAction<FilltersType>>,
  value: string
) {
  if (type === "fillter/min") {
    const numericValue = value === "" ? "0" : value.replace(/[^0-9]/g, "");
    console.log(numericValue);

    return setFillters((perv) => ({
      ...perv,
      price: {
        from: parseInt(numericValue),
        to: perv.price.to,
      },
    }));
  }
}
