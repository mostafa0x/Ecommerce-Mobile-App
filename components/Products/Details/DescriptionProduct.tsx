import { Colors, Fonts } from "@/constants";
import { rf } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function DescriptionProduct({
  description,
}: {
  description: string;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.labelDes}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  labelDes: {
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.secText,
    fontSize: rf(14),
    fontWeight: "bold",
  },
});
