import { Colors } from "@/constants";
import { rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";
export default function SliderItem({ item }: { item: string }) {
  return (
    <View>
      <Image
        source={{ uri: item }}
        style={styles.container}
        contentFit="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: rw(161),
    height: rh(248),
    backgroundColor: Colors.secBg,
    marginLeft: rw(24),
    borderRadius: rw(8),
  },
});
