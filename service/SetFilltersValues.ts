import { inputTypes } from "@/types/CustomInputType";
import { FilltersType } from "@/types/FilltersType";

export function SetFilltersValues(
  type: inputTypes,
  setFillters: React.Dispatch<React.SetStateAction<FilltersType>>,
  value: string
) {
  if (type === "fillter/min" || type === "fillter/max") {
    const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
    const finalValue = isNaN(numericValue) ? 0 : numericValue;
    console.log(numericValue);

    return type === "fillter/min"
      ? setFillters((perv) => ({
          ...perv,
          price: {
            from: finalValue,
            to: perv.price.to,
          },
        }))
      : setFillters((perv) => ({
          ...perv,
          price: {
            from: perv.price.from,
            to: finalValue,
          },
        }));
  }
}
