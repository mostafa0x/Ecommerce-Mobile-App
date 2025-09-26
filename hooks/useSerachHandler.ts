import { FilltersType, TypeFillter } from "@/types/FilltersType";
import { useRouter } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { Modalize } from "react-native-modalize";

export default function useSerachHandler() {
  const router = useRouter();
  const modelRef = useRef<Modalize>(null);

  const [q, setQ] = useState("");
  const [fillters, setFillters] = useState<FilltersType>({
    price: {
      from: 0,
      to: 0,
    },
    onSale: false,
    category: "All",
    type: "on Sale",
  });

  function Seraching() {
    router.push({ pathname: "/Serach" as any, params: { q } });
  }

  const setFilterType = useCallback(
    (newType: TypeFillter) => {
      OpenModel();
      setFillters({ ...fillters, type: newType });
    },
    [fillters, modelRef]
  );

  useEffect(() => {
    if (!modelRef.current) return;
    modelRef.current?.open();

    return () => {};
  }, [fillters, modelRef]);

  const OpenModel = useCallback(() => {
    modelRef?.current?.open();
  }, [modelRef]);
  const CloseModel = useCallback(() => {
    modelRef?.current?.close();
  }, [modelRef]);

  return {
    modelRef,
    CloseModel,
    OpenModel,
    q,
    setQ,
    Seraching,
    fillters,
    setFillters,
    setFilterType,
  };
}
