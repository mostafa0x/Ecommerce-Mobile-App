import BackButton from "@/components/BackButton/BackButton";
import CartList from "@/components/Cart/CartList";
import { Colors, Fonts } from "@/constants";
import { rf, rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.appbarContainer}>
        <BackButton />
        <Text style={styles.titleAppbar}>Cart</Text>
      </View>
      <View>
        <CartList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: rh(63),
    paddingHorizontal: rw(27),
  },
  appbarContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: rw(113),
  },
  titleAppbar: {
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.text,
    fontSize: rf(16),
    fontWeight: "bold",
  },
});
