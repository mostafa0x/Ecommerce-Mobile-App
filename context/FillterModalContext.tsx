import { FillterContextTypes } from "@/types/FillterContextTypes";
import { FilltersType, TypeFillter } from "@/types/FilltersType";
import { useRouter } from "expo-router";
import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { StyleSheet } from "react-native";
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
});

export const useFillterModalContext = () => useContext(FillterModalContext);

export default function FillterModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const modalRef = useRef<Modalize>(null);

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
      setFillters({ ...fillters, type: newType });
      OpenModel();
    },
    [fillters, OpenModel]
  );

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
      }}
    >
      {children}
    </FillterModalContext.Provider>
  );
}

const styles = StyleSheet.create({});
