import { rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, View } from "react-native";
import SerachFillters_Item from "./Item";

export default function SerachFillters() {
  return (
    <View style={styles.container}>
      <SerachFillters_Item label="Price" icon active />
      <SerachFillters_Item label="On Sale" icon={false} active={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: rw(4),
  },
});
