import { FilltersByCategoriesType } from "@/types/FilltersByCategoriesType";
import { rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { memo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import FilltersButton from "./Button";

function FilltersByCategories({ isLoading }: FilltersByCategoriesType) {
  const renderItem = useCallback(() => {
    return <FilltersButton isLoading={isLoading} />;
  }, []);

  const ItemSeparator = useCallback(() => {
    return <View style={styles.itemSeparator}></View>;
  }, []);
  return (
    <View style={styles.container}>
      <FlashList
        data={isLoading ? [1, 2, 3] : [1, 2, 3, 4, 2, 4]}
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

export default memo(FilltersByCategories);
