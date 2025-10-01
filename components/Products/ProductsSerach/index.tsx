import SerachFillters from "@/components/SerachFillters";
import { Colors, Fonts } from "@/constants";
import { useFillterModalContext } from "@/context/FillterModalContext";
import { useAppSelector } from "@/hooks/useRedux";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import ProductsList from "../ProductsList";

function ProductsSerach({ q }: { q: string }) {
  const { isLoadingProducts } = useAppSelector((state) => state.MainReducer);
  const { fillterProducts, setFillters } = useFillterModalContext();

  useEffect(() => {
    setFillters((prev) => ({
      ...prev,
      category: "All",
      type: "Price",
    }));

    return () => {};
  }, []);

  return (
    <View style={styles.serachingContainer}>
      <View style={styles.fillterContainer}>
        <SerachFillters />
        {fillterProducts.length > 0 ? (
          <>
            <Text style={styles.labelResults}>
              {false ? "" : `${fillterProducts.length} Results Found`}
            </Text>
          </>
        ) : null}
      </View>
      <ProductsList
        data={fillterProducts}
        isLoading={isLoadingProducts}
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
