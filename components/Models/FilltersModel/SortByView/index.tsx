import CustomButton from "@/components/CustomButton";
import { useAppSelector } from "@/hooks/useRedux";
import { rh } from "@/utils/dimensions";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";

export default function SortByView() {
  const {} = useAppSelector((state) => state.CategoriesReducer);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <CustomButton
        lable={"sasa"}
        activeIcon
        color={"praimry"}
        widthSize={342}
      />
      <CustomButton lable={"sasa"} activeIcon color={"secBg"} widthSize={342} />
      <CustomButton lable={"sasa"} activeIcon color={"secBg"} widthSize={342} />
      <CustomButton lable={"sasa"} activeIcon color={"secBg"} widthSize={342} />
      <CustomButton lable={"sasa"} activeIcon color={"secBg"} widthSize={342} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: rh(16),
    flexGrow: 1,
    paddingBottom: rh(150),
  },
});
