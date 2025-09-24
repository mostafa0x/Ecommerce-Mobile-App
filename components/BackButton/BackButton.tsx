import { Colors } from "@/constants";
import { useBackHandler } from "@/hooks/useBackHandler";
import { rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import BackIcon from "../Icons/BackIcon";

const size = Math.min(rw(40), rh(40));

export default function BackButton() {
  const backHandler = useBackHandler();
  return (
    <TouchableOpacity onPress={backHandler} style={styles.container}>
      <BackIcon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: Colors.secBg,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: rw(4),
    paddingTop: rh(7),
  },
});
