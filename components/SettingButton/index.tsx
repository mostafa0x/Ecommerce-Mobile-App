import { Colors, Fonts } from "@/constants";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import ArrowIcon from "../Icons/ArrowIcon";

function SettingButton({ label }: { label: string }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{label}</Text>
      <ArrowIcon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: rw(342),
    height: rh(56),
    backgroundColor: Colors.secBg,
    borderRadius: rw(8),
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: rw(16),
    flexDirection: "row",
  },
  title: {
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.text,
    fontSize: rf(16),
    lineHeight: rh(22),
  },
});

export default memo(SettingButton);
