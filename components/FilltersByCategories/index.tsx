import { loadingCatgeroyList } from "@/service/loadingValusesForLists";
import { OneCategoryType } from "@/types/CategoriesType";
import { FilltersByCategoriesType } from "@/types/FilltersByCategoriesType";
import { rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { memo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import FilltersButton from "./Button";

function FilltersByCategories({ isLoading, data }: FilltersByCategoriesType) {
  const renderItem = useCallback(({ item }: { item: OneCategoryType }) => {
    return item?.name === "All" ? null : (
      <FilltersButton isLoading={isLoading} item={item} />
    );
  }, []);

  const ItemSeparator = useCallback(() => {
    return <View style={styles.itemSeparator}></View>;
  }, []);
  return (
    <View style={styles.container}>
      <FlashList
        data={isLoading ? loadingCatgeroyList : data}
        renderItem={renderItem}
        numColumns={1}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={(item, index) => String(item?.id ? item.id : index)}
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
