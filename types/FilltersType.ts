export interface FilltersType {
  price: {
    from: number;
    to: number;
  };
  onSale: boolean;
  category: string;
  type: TypeFillter;
}

export type TypeFillter = "on Sale" | "Sort by" | "Price";
