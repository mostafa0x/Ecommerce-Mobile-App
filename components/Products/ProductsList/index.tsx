import { loadingPrdouctsList } from "@/service/loadingValusesForLists";
import { ProductsListTypes, ProductType } from "@/types/ProductsListTypes";
import { rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { memo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import EmptyList from "./EmptyList";
import ItemListProduct from "./ItemList";

function ProductsList({
  calledFrom = "Home",
  isLoading,
  data,
}: ProductsListTypes) {
  const fromHome = calledFrom === "Home";
  const renderItem = useCallback(
    ({ item }: { item: ProductType }) => {
      return <ItemListProduct isLoading={isLoading} item={item} />;
    },
    [isLoading]
  );
  const ItemSeparator = useCallback(() => {
    return <View style={styles.itemSeparator}></View>;
  }, []);

  const emptyList = useCallback(() => {
    return <EmptyList />;
  }, []);

  return (
    <View style={[styles.constainer, !fromHome && styles.fillterContainer]}>
      <FlashList
        style={styles.list}
        data={isLoading ? loadingPrdouctsList : data}
        renderItem={renderItem}
        keyExtractor={(item, index) => String(item?._id ? item.id : index)}
        horizontal={fromHome}
        numColumns={fromHome ? 1 : 2}
        contentContainerStyle={[
          styles.contentContainer,
          !fromHome && styles.fillterContentContainer,
        ]}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={emptyList}
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
