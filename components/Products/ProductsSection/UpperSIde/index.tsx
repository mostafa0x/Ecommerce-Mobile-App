import { Colors, Fonts } from "@/constants";
import { rf } from "@/utils/dimensions";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function UpperSIde({ title = "Empty" }: { title: string }) {
  return (
    <View style={styles.upperContiner}>
      <Text style={styles.title}>{title}</Text>
      <Link href={"/Auth"} style={styles.secTitle}>
        See All
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
    fontSize: rf(18),
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.text,
    fontWeight: "bold",
  },
  secTitle: {
    fontSize: rf(14),
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.text,
  },
});
