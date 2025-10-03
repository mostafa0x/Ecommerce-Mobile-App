import { useAppSelector } from "@/hooks/useRedux";
import fillterByCategory from "@/service/fillterByCategory";
import fillterByPrice from "@/service/fillterByPrice";
import { FillterContextTypes } from "@/types/FillterContextTypes";
import { FilltersType, TypeFillter } from "@/types/FilltersType";
import { usePathname, useRouter } from "expo-router";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
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
  fillterProducts: [],
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
  const pathName = usePathname();
  let modalRef = useRef<Modalize>(null);
  const { products } = useAppSelector((state) => state.MainReducer);
  const [q, setQ] = useState("");
  const [fillters, setFillters] = useState<FilltersType>({
    price: { from: 0, to: 0 },
    onSale: false,
    category: "All",
    type: "on Sale",
  });

  const Seraching = useCallback(() => {
    pathName !== "/Serach"
      ? router.push({ pathname: "/Serach" as any, params: { q } })
      : router.push({ pathname: "/Serach" as any, params: { q } });
  }, [[pathName]]);
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
    CloseModel();
  }, []);

  useEffect(() => {
    console.log(fillters);
    return () => {};
  }, [fillters]);

  function fillter() {}

  const fillterProducts = useMemo(() => {
    if (products.length <= 0) return [];
    if (fillters.type !== "other") {
      if (q) {
        if (fillters) {
          return products.filter((product) => {
            const sortByCategory = fillterByCategory(fillters, product);
            const sortByPrice = fillterByPrice(fillters, product);
            return (
              product.title
                .toLocaleLowerCase()
                .includes(q.toLocaleLowerCase()) &&
              sortByPrice &&
              sortByCategory
            );
          });
        } else {
          return products.filter((product) =>
            product.title.toLocaleLowerCase().includes(q.toLocaleLowerCase())
          );
        }
      }
    } else {
      return products.filter(
        (product) => product.category.name === fillters.category
      );
    }
    return [];
  }, [products, q, fillter]);

  return (
    <FillterModalContext.Provider
      value={{
        q,
        modalRef,
        fillters,
        fillterProducts,
        OpenModel,
        setQ,
        CloseModel,
        setFilterType,
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
