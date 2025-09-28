import { ProductsListTypes } from "@/types/ProductsListTypes";
import { rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { memo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import ItemListProduct from "./ItemList";

function ProductsList({ calledFrom = "Home", isLoading }: ProductsListTypes) {
  const fromHome = calledFrom === "Home";
  const renderItem = useCallback(() => {
    return <ItemListProduct isLoading={isLoading} />;
  }, []);
  const ItemSeparator = useCallback(() => {
    return <View style={styles.itemSeparator}></View>;
  }, []);

  return (
    <View style={[styles.constainer, !fromHome && styles.fillterContainer]}>
      <FlashList
        style={styles.list}
        data={[1, 2, 3, 4, 5, 6, 7]}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={fromHome}
        numColumns={fromHome ? 1 : 2}
        contentContainerStyle={[
          styles.contentContainer,
          !fromHome && styles.fillterContentContainer,
        ]}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: { width: "100%", height: "auto" },
  fillterContainer: {
    height: "100%",
  },

  list: {},
  contentContainer: {
    paddingHorizontal: rw(24),
  },
  fillterContentContainer: {
    paddingBottom: rh(450),
  },
  itemSeparator: {
    width: rw(12),
    height: rh(20),
  },
});

export default memo(ProductsList);
