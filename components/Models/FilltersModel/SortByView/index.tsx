import CustomButton from "@/components/CustomButton";
import { useFillterModalContext } from "@/context/FillterModalContext";
import { useAppSelector } from "@/hooks/useRedux";
import { OneCategoryType } from "@/types/CategoriesType";
import { rh } from "@/utils/dimensions";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";

export default function SortByView() {
  const { fillters, setFillterCategory } = useFillterModalContext();
  // const { categories } = useCategories();
  const { categories } = useAppSelector((state) => state.MainReducer);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.map((category: OneCategoryType) =>
        category.name === "All" ? null : (
          <CustomButton
            key={category.id}
            lable={category.name}
            activeIcon={fillters.category === category.name}
            color={fillters.category === category.name ? "praimry" : "secBg"}
            widthSize={342}
            setFillterCategory={setFillterCategory}
          />
        )
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: rh(16),
    flexGrow: 1,
    paddingBottom: rh(200),
  },
});
