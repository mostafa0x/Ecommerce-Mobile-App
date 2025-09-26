import { Colors, Fonts } from "@/constants";
import { rf, rh, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Badge } from "react-native-paper";
import AvatarFC from "../AvatarFC";
import CartIcon from "../Icons/CartIcon";

export default function Appbar() {
  const router = useRouter();
  return (
    <View style={styles.appBarContainer}>
      <TouchableOpacity onPress={() => router.push("/Setting")}>
        <AvatarFC size={40} />
      </TouchableOpacity>
      <Text style={styles.appbarTxt}>FoFo Store</Text>
      <TouchableOpacity onPress={() => router.push("/Cart")}>
        <Badge style={styles.badge} size={rf(24)}>
          3
        </Badge>
        <CartIcon />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  appBarContainer: {
    paddingHorizontal: rw(24),
    paddingTop: rh(63),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  appbarTxt: {
    fontSize: rf(24),
    fontFamily: Fonts.circularstdmedium500,
    fontWeight: "700",
    color: Colors.text,
  },
  badge: {
    backgroundColor: "#FA3636",
    fontSize: rf(12),
    fontFamily: Fonts.circularstdmedium500,
    color: "white",
    position: "absolute",
    right: rw(-3),
    top: rh(-10),
    zIndex: 1,
  },
});
