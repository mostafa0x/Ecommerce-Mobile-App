import MiniButton from "@/components/MiniButton";
import { Colors, Fonts } from "@/constants";
import { rf, rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

function CartItem() {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <Image
          style={styles.img}
          contentFit="contain"
          source={require("@/assets/images/cart.png")}
        />
        <Text numberOfLines={1} style={styles.labelName}>
          sasasasasasasaasadasdasdasdaaaaaaaaaaaaaaa
        </Text>
      </View>
      <View style={styles.rightSide}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.labelPrice}>
          $1483
        </Text>
        <View style={styles.btnsContainer}>
          <MiniButton type="add" />
          <Text numberOfLines={1} style={styles.lableCount}>
            1
          </Text>
          <MiniButton type="sub" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: rw(342),
    height: rh(80),
    backgroundColor: Colors.secBg,
    justifyContent: "space-between",
    borderRadius: rw(8),
    padding: rw(8),
    flexDirection: "row",
  },
  img: {
    width: rw(64),
    height: rh(64),
    borderRadius: rw(4),
  },
  leftSide: {
    flexDirection: "row",
    alignItems: "center",
    gap: rw(12),
  },
  rightSide: {
    flexDirection: "column",
    gap: rw(8),
    flexShrink: 1,
  },
  labelName: {
    fontSize: rf(18),
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.text,
    width: rw(150),
  },
  labelPrice: {
    fontSize: rf(18),
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.text,
    textAlign: "right",
  },
  lableCount: {
    fontSize: rf(16),
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.text,
    width: rw(20),
    textAlign: "center",
  },
  btnsContainer: {
    flexDirection: "row",
    gap: rw(8),
    justifyContent: "flex-end",
  },
});

export default memo(CartItem);
