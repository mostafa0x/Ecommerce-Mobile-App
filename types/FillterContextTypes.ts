import { FilltersType, TypeFillter } from "./FilltersType";
import { ProductType } from "./ProductsListTypes";

export interface FillterContextTypes {
  q: string;
  fillters: FilltersType;
  modalRef: any;
  fillterProducts: ProductType[];
  setQ: React.Dispatch<React.SetStateAction<string>>;
  setFillters: React.Dispatch<React.SetStateAction<FilltersType>>;
  OpenModel: () => void;
  CloseModel: () => void;
  setFilterType: (label: TypeFillter) => void;
  Seraching: () => void;
  ClaerFillters: () => void;
  setFillterCategory: (categoryName: string) => void;
}
