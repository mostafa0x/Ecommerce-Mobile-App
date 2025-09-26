import { FilltersType, TypeFillter } from "./FilltersType";

export interface FillterContextTypes {
  q: string;
  fillters: FilltersType;
  modalRef: any;
  setQ: React.Dispatch<React.SetStateAction<string>>;
  setFillters: React.Dispatch<React.SetStateAction<FilltersType>>;
  OpenModel: () => void;
  CloseModel: () => void;
  setFilterType: (label: TypeFillter) => void;
  Seraching: () => void;
}
