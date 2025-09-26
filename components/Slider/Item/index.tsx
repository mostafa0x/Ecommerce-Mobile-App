import { Colors } from "@/constants";
import { rh, rw } from "@/utils/dimensions";
import { ImageBackground } from "expo-image";
import React from "react";
import { StyleSheet } from "react-native";
export default function SliderItem() {
  return (
    <ImageBackground
      source={require("@/assets/images/cart.png")}
      style={styles.container}
      contentFit="contain"
    ></ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: rw(161),
    height: rh(248),
    marginLeft: rw(24),
    backgroundColor: Colors.secBg,
  },
});
