import { rh, rw } from "@/utils/dimensions";
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
        data={[1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 2, 4]}
        renderItem={renderItem}
        numColumns={1}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparator}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: rw(24),
  },
  contentContainer: {
    paddingBottom: rh(260),
  },
  itemSeparator: {
    height: rh(8),
  },
});
