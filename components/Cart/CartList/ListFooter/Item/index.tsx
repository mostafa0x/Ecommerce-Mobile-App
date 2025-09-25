import { Colors, Fonts } from "@/constants";
import { rf } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
function ListFooterItem({
  label,
  value = 0,
}: {
  label: string;
  value: number;
}) {
  return (
    <View style={styles.listFooterItem}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.price}>${value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: Fonts.circularstdmedium500,
    fontSize: rf(16),
    color: Colors.secText,
  },
  price: {
    fontFamily: Fonts.circularstdmedium500,
    fontSize: rf(16),
    color: Colors.text,
  },
  listFooterItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default memo(ListFooterItem);
