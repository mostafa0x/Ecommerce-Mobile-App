import { inputTypes } from "@/types/CustomInputType";
import { FilltersType } from "@/types/FilltersType";

export function GetFilltersValues(type: inputTypes, fillters: FilltersType) {
  if (type === "fillter/min") {
    return fillters.price.from === 0 ? "" : fillters.price.from.toString();
  } else if (type === "fillter/max") {
    return fillters.price.to === 0 ? "" : fillters.price.to.toString();
  }

  return "0";
}
