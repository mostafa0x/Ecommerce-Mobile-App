import { useFillterModalContext } from "@/context/FillterModalContext";
import { rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, View } from "react-native";
import SerachFillters_Item from "./Item";

export default function SerachFillters() {
  const { fillters, setFilterType, CloseModel, modalRef } =
    useFillterModalContext();

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
        icon={false}
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
