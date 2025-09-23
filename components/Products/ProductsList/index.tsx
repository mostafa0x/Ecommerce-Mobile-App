import { rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import ItemListProduct from "./ItemList";

export default function ProductsList() {
  const renderItem = useCallback(() => {
    return <ItemListProduct />;
  }, []);
  return (
    <View style={styles.constainer}>
      <FlashList
        style={styles.list}
        data={Array(4)}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: { width: "100%", height: "auto" },
  list: {
    width: "100%",
    height: rh(281),
  },
  contentContainer: {
    paddingHorizontal: rw(24),
  },
});
