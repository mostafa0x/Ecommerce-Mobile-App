import { Colors } from "@/constants";
import { rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

export default function FilltersButton() {
  return (
    <View style={styles.container}>
      <Avatar.Image
        style={styles.icon}
        size={rw(40)}
        source={{ uri: undefined }}
      />
      <Text>FilltersByCategories</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: rw(342),
    height: rh(64),
    borderRadius: rw(8),
    backgroundColor: Colors.secBg,
    gap: rw(16),
    alignItems: "center",
    flexDirection: "row",
    padding: rw(12),
  },
  icon: {
    backgroundColor: Colors.secBg,
  },
});
