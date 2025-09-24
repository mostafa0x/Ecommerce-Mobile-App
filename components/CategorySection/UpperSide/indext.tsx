import { Colors, Fonts } from "@/constants";
import { rf } from "@/utils/dimensions";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function UpperSide() {
  return (
    <View style={styles.upperContiner}>
      <Text style={styles.title}>Category</Text>
      <Link href={"/(tabs)/categories/All"} style={styles.secTitle}>
        Show More
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  upperContiner: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: rf(16),
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.text,
  },
  secTitle: {
    fontSize: rf(14),
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.text,
  },
});
