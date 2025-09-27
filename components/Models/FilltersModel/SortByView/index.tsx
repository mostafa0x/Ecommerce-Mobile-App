import CustomButton from "@/components/CustomButton";
import { useFillterModalContext } from "@/context/FillterModalContext";
import { useAppSelector } from "@/hooks/useRedux";
import { rh } from "@/utils/dimensions";
import React from "react";
import { ScrollView, StyleSheet, TouchableWithoutFeedback } from "react-native";

export default function SortByView() {
  const { fillters, setFillterCategory } = useFillterModalContext();
  const { categories } = useAppSelector((state) => state.CategoriesReducer);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.map((category) => (
        <TouchableWithoutFeedback
          onPress={() => setFillterCategory(category.name)}
        >
          <CustomButton
            lable={category.name}
            activeIcon={fillters.category === category.name}
            color={fillters.category === category.name ? "praimry" : "secBg"}
            widthSize={342}
          />
        </TouchableWithoutFeedback>
      ))}
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
