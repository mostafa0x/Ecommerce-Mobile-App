import SerachFillters from "@/components/SerachFillters";
import { Colors, Fonts } from "@/constants";
import { useFillterModalContext } from "@/context/FillterModalContext";
import useProducts from "@/hooks/useProducts";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import ProductsList from "../ProductsList";

function ProductsSerach({ q }: { q: string }) {
  const { fillters } = useFillterModalContext();
  const { products, isLoading } = useProducts("All", fillters, q);
  return (
    <View style={styles.serachingContainer}>
      <View style={styles.fillterContainer}>
        <SerachFillters />
        <Text style={styles.labelResults}>
          {false ? "" : `${products.length} Results Found`}
        </Text>
      </View>
      <ProductsList
        data={products}
        isLoading={isLoading}
        calledFrom={"fillter"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  labelResults: {
    fontFamily: Fonts.circularstdmedium500,
    fontSize: rf(14),
    color: Colors.text,
  },
  serachingContainer: {
    marginTop: rh(0),
  },
  fillterContainer: {
    paddingHorizontal: rw(24),
    paddingTop: rh(24),
    paddingBottom: rh(16),
    gap: rh(17),
  },
});

export default memo(ProductsSerach);
