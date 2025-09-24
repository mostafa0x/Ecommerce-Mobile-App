import { rh } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import FilltersButton from "./Button";

export default function FilltersByCategories() {
  const renderItem = useCallback(() => {
    return <FilltersButton />;
  }, []);

  const ItemSeparator = useCallback(() => {
    return <View style={styles.itemSeparator}></View>;
  }, []);
  return (
    <View style={styles.container}>
      <FlashList
        data={[1, 2, 3, 4, 5]}
        renderItem={renderItem}
        numColumns={1}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%", height: "100%" },
  contentContainer: {
    paddingBottom: rh(20),
  },
  itemSeparator: {
    height: rh(8),
  },
});
