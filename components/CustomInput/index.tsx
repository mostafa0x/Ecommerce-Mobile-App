import { Colors } from "@/constants";
import { CustomInputType } from "@/types/CustomInputType";
import { rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function CustomInput({ placeholder = "ggg" }: CustomInputType) {
  return (
    <View>
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.secBg,
    borderRadius: rw(8),
    width: rw(342),
    height: rh(56),
    paddingHorizontal: rw(12),
  },
});
