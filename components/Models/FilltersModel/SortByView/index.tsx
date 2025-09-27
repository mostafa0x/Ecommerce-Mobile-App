import CustomButton from "@/components/CustomButton";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function SortByView() {
  return (
    <View>
      <CustomButton
        lable={"sasa"}
        activeIcon
        color={"secBg"}
        redirect={"/"}
        widthSize={342}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
