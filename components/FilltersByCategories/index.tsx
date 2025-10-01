import { useAppSelector } from "@/hooks/useRedux";
import { loadingCatgeroyList } from "@/service/loadingValusesForLists";
import { OneCategoryType } from "@/types/CategoriesType";
import { rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { memo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import FilltersButton from "./Button";

function FilltersByCategories() {
  // const { categories, isLoading } = useCategories();
  const { categories, isLoadingCategories } = useAppSelector(
    (state) => state.MainReducer
  );

  const renderItem = useCallback(({ item }: { item: OneCategoryType }) => {
    return item?.name === "All" ? null : (
      <FilltersButton isLoading={isLoadingCategories} item={item} />
    );
  }, []);

  const ItemSeparator = useCallback(() => {
    return <View style={styles.itemSeparator}></View>;
  }, []);
  return (
    <View style={styles.container}>
      <FlashList
        data={isLoadingCategories ? loadingCatgeroyList : categories}
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
