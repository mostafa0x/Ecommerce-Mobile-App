export interface CustomInputType {
  placeholder: string;
  inputType: "number" | "string";
  type: inputTypes;
}

export type inputTypes = "fillter/min" | "fillter/max";
