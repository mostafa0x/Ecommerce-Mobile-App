import { rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import ItemListCategory from "./ItemList";

export default function CategoryList() {
  const renderItem = useCallback(() => {
    return <ItemListCategory title="Category Name" />;
  }, []);
  const ItemSeparator = useCallback(() => {
    return <View style={styles.itemSeparatorContainer}></View>;
  }, []);
  return (
    <View style={styles.container}>
      <FlashList
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
        data={Array(10)}
        renderItem={renderItem}
        horizontal
        ItemSeparatorComponent={ItemSeparator}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
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
