import { useFillterModalContext } from "@/context/FillterModalContext";
import { rw } from "@/utils/dimensions";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import SerachFillters_Item from "./Item";

export default function SerachFillters({ refetch }: { refetch: () => void }) {
  const { fillters, setFilterType, CloseModel, modalRef } =
    useFillterModalContext();

  useEffect(() => {
    refetch();
    return () => {};
  }, [fillters]);

  return (
    <View style={styles.container}>
      <SerachFillters_Item
        label="Price"
        icon
        active={fillters.price.from !== 0 || fillters.price.to !== 0}
        setFilterType={setFilterType}
      />

      <SerachFillters_Item
        label="Sort by"
        icon={true}
        active={fillters.category !== "All"}
        setFilterType={setFilterType}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: rw(4),
  },
});
