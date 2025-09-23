import { Colors, Fonts } from "@/constants";
import { rf, rh } from "@/utils/dimensions";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NotFound() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Not Found This Page</Text>
      <Link href={"/"} style={styles.btn}>
        Back to Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: rh(344),
  },
  title: {
    fontFamily: Fonts.circularstdmedium500,
    fontSize: rf(38),
    color: Colors.text,
    fontWeight: "900",
  },
  btn: {
    fontFamily: Fonts.circularstdmedium500,
    fontSize: rf(22),
    color: Colors.text,
    marginTop: rh(80),
  },
});
