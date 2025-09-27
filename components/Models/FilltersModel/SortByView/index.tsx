import CustomButton from "@/components/CustomButton";
import { rh } from "@/utils/dimensions";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";

export default function SortByView() {
  return (
    <ScrollView scrollEnabled contentContainerStyle={styles.container}>
      <CustomButton
        lable={"sasa"}
        activeIcon
        color={"praimry"}
        redirect={"/"}
        widthSize={342}
      />
      <CustomButton
        lable={"sasa"}
        activeIcon
        color={"secBg"}
        redirect={"/"}
        widthSize={342}
      />
      <CustomButton
        lable={"sasa"}
        activeIcon
        color={"secBg"}
        redirect={"/"}
        widthSize={342}
      />
      <CustomButton
        lable={"sasa"}
        activeIcon
        color={"secBg"}
        redirect={"/"}
        widthSize={342}
      />
      <CustomButton
        lable={"sasa"}
        activeIcon
        color={"secBg"}
        redirect={"/"}
        widthSize={342}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: rh(16),
    flexGrow: 1,
    height: "auto",
    width: "100%",
    paddingBottom: rh(100),
  },
});
