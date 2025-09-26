import { Fonts } from "@/constants";
import { rf, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function SignoutButton() {
  return (
    <Button
      onPress={() => console.log("x")}
      labelStyle={styles.label}
      style={styles.btn}
    >
      Sign Out
    </Button>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: rw(100),
  },
  label: {
    fontFamily: Fonts.circularstdmedium500,
    fontSize: rf(16),
    color: "#FA3636",
    fontWeight: "bold",
  },
});
