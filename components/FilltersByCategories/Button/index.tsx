import { Colors } from "@/constants";
import { rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function FilltersButton() {
  return (
    <View>
      <Text>FilltersByCategories</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: rw(342),
    height: rh(64),
    borderRadius: rw(8),
    backgroundColor: Colors.secBg,
    gap: rw(16),
  },
});
