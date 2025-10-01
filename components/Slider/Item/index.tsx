import { Colors } from "@/constants";
import { rh, rw } from "@/utils/dimensions";
import { ImageBackground } from "expo-image";
import React from "react";
import { StyleSheet } from "react-native";
export default function SliderItem({ item }: { item: string }) {
  return (
    <ImageBackground
      source={{ uri: item }}
      style={styles.container}
      contentFit="cover"
    ></ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: rw(161),
    height: rh(248),
    backgroundColor: Colors.secBg,
  },
});
