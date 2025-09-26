import { Colors, Fonts } from "@/constants";
import { rf, rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SettingCard() {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <Text style={styles.labelName}>User Name</Text>
        <Text style={styles.labelEmail}>User@gmail.com</Text>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: rw(342),
    height: rh(96),
    backgroundColor: Colors.secBg,
    borderRadius: rw(8),
    paddingHorizontal: rw(16),
    paddingVertical: rh(16),
  },
  leftSide: {
    gap: rh(12),
  },
  labelName: {
    fontFamily: Fonts.circularstdmedium500,
    fontSize: rf(16),
    color: Colors.text,
    fontWeight: "bold",
  },
  labelEmail: {
    fontFamily: Fonts.circularstdmedium500,
    fontSize: rf(16),
    color: Colors.secText,
  },
});
