import { Colors, Fonts } from "@/constants";
import { rf } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function DescriptionProduct() {
  return (
    <View style={styles.container}>
      <Text style={styles.labelDes}>
        Elevate your gaming experience with this state-of-the-art wireless
        controller, featuring a crisp white base with vibrant orange accents.
        Designed for precision play, the ergonomic shape and responsive buttons
        provide maximum comfort and control for endless hours of gameplay.
        Compatible with multiple gaming platforms, this controller is a
        must-have for any serious gamer looking to enhance their setup.{" "}
      </Text>
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
