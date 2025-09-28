import { CategoryListType } from "@/types/CategoryListType";
import { rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { memo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import ItemListCategory from "./ItemList";

function CategoryList({ isLoading }: CategoryListType) {
  const renderItem = useCallback(() => {
    return <ItemListCategory title="Category Name" isLoading={isLoading} />;
  }, []);
  const ItemSeparator = useCallback(() => {
    return <View style={styles.itemSeparatorContainer}></View>;
  }, []);
  return (
    <View style={styles.container}>
      <FlashList
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
        data={[1, 2, 3, 4, 5, 6, 7]}
        renderItem={renderItem}
        horizontal
        ItemSeparatorComponent={ItemSeparator}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        initialScrollIndex={0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "auto" },
  contentContainer: {
    paddingHorizontal: rw(24),
  },
  list: {
    width: "100%",
    height: rh(90),
  },
  itemSeparatorContainer: {
    width: rw(13),
  },
});

export default memo(CategoryList);
