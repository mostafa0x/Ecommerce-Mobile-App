import { Colors, Fonts } from "@/constants";
import { rf, rh } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Shipping_Returns() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shipping & Returns</Text>
      <Text style={styles.text}>
        Free standard shipping and free 60-day-returns
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: rh(12),
  },
  title: {
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.text,
    fontSize: rf(16),
    fontWeight: "bold",
  },
  text: {
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.secText,
    fontSize: rf(14),
    fontWeight: "bold",
  },
});
