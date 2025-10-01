import { Colors, Fonts } from "@/constants";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

function InfoProduct({
  data,
}: {
  data: { name: string; price: number; disPrice: number };
}) {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.labelName}>
        {data.name}
      </Text>
      <View style={styles.priceContainer}>
        <Text numberOfLines={1} style={styles.labelPrice}>
          ${data.disPrice}
        </Text>
        <Text numberOfLines={1} style={styles.labelDiscount}>
          ${data.price}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: rh(15),
  },
  priceContainer: {
    flexDirection: "row",
    gap: rw(8),
  },
  labelName: {
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.text,
    fontSize: rf(18),
    fontWeight: "bold",
  },
  labelPrice: {
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.praimry,
    fontSize: rf(18),
    fontWeight: "bold",
  },
  labelDiscount: {
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.secText,
    fontSize: rf(14),
    fontWeight: "bold",
    textDecorationLine: "line-through",
    textAlignVertical: "center",
  },
});

export default memo(InfoProduct);
