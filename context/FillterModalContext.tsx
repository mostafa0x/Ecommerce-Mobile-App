import { FillterContextTypes } from "@/types/FillterContextTypes";
import { FilltersType, TypeFillter } from "@/types/FilltersType";
import { useRouter } from "expo-router";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Modalize } from "react-native-modalize";

const FillterModalContext = createContext<FillterContextTypes>({
  q: "",
  fillters: {
    price: { from: 0, to: 0 },
    type: "Price",
    category: "All",
    onSale: false,
  },
  modalRef: null,
  setQ: () => {},
  setFillters: () => {},
  OpenModel: () => {},
  CloseModel: () => {},
  setFilterType: (label: string) => {},
  Seraching: () => {},
  ClaerFillters: () => {},
  setFillterCategory: () => {},
});

export const useFillterModalContext = () => useContext(FillterModalContext);

export default function FillterModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  let modalRef = useRef<Modalize>(null);

  const [q, setQ] = useState("");
  const [fillters, setFillters] = useState<FilltersType>({
    price: { from: 0, to: 0 },
    onSale: false,
    category: "All",
    type: "on Sale",
  });

  const Seraching = () => {
    router.push({ pathname: "/Serach" as any, params: { q } });
  };

  const OpenModel = useCallback(() => {
    modalRef.current?.open();
  }, []);

  const CloseModel = useCallback(() => {
    modalRef.current?.close();
  }, []);

  const setFilterType = useCallback(
    (newType: TypeFillter) => {
      setFillters((prev) => ({ ...prev, type: newType }));
      modalRef.current?.open();
    },
    [fillters]
  );

  const ClaerFillters = useCallback(() => {
    setFillters((prev) =>
      prev.type === "Price"
        ? {
            ...prev,
            price: {
              to: 0,
              from: 0,
            },
          }
        : prev.type === "on Sale"
        ? {
            ...prev,
            onSale: false,
          }
        : {
            ...prev,
            category: "All",
          }
    );
    CloseModel();
  }, []);

  const setFillterCategory = useCallback((categoryName: string) => {
    setFillters((prev) => ({ ...prev, category: categoryName }));
  }, []);

  useEffect(() => {
    console.log(fillters);

    return () => {};
  }, [fillters]);

  return (
    <FillterModalContext.Provider
      value={{
        q,
        setQ,
        modalRef,
        OpenModel,
        CloseModel,
        setFilterType,
        fillters,
        setFillters,
        Seraching,
        ClaerFillters,
        setFillterCategory,
      }}
    >
      {children}
    </FillterModalContext.Provider>
  );
}
