import { rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import ProductsList from "../ProductsList";
import UpperSIde from "./UpperSIde";

function ProductsSection() {
  return (
    <View style={styles.container}>
      <View style={styles.uppderContainer}>
        <UpperSIde title="Top Selling" />
      </View>
      <View style={styles.list}>
        <ProductsList isLoading calledFrom="Home" />
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
