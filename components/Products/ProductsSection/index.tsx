import { useAppSelector } from "@/hooks/useRedux";
import { FillterProdcutsType } from "@/types/FillterProdcutsType";
import { rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import ProductsList from "../ProductsList";
import UpperSIde from "./UpperSIde";

function ProductsSection({
  fillter,
  title = "empty",
}: {
  fillter: FillterProdcutsType;
  title: string;
}) {
  const { products, isLoadingProducts } = useAppSelector(
    (state) => state.MainReducer
  );
  return (
    <View style={styles.container}>
      <View style={styles.uppderContainer}>
        <UpperSIde title={title} />
      </View>
      <View style={styles.list}>
        <ProductsList
          isLoading={isLoadingProducts}
          calledFrom="Home"
          data={products}
          fillter={fillter}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  uppderContainer: {
    paddingHorizontal: rw(24),
  },
  list: { marginTop: rh(16) },
});

export default memo(ProductsSection);
