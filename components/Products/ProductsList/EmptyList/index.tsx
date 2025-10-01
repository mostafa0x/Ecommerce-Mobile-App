import CustomButton from "@/components/CustomButton";
import { Colors, Fonts } from "@/constants";
import { rf, rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function EmptyList({
  calledFrom,
}: {
  calledFrom: "Home" | "fillter";
}) {
  console.log(calledFrom);

  return (
    <View style={[styles.container, calledFrom !== "fillter" && styles.space]}>
      <Image
        style={styles.img}
        source={require("@/assets/images/searchIcon.png")}
      />
      <Text style={styles.label}>
        Sorry, we couldn't find any matching result for your Search.
      </Text>
      <CustomButton
        redirect="/categories/All"
        lable={"Explore Categories"}
        color={"praimry"}
        widthSize={185}
        heightSize={52}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: rh(147),
    gap: rh(24),
    width: rw(360),
  },
  space: {
    paddingTop: rh(50),
  },
  img: {
    width: rw(100),
    height: rw(100),
  },
  label: {
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.text,
    fontSize: rf(24),
    textAlign: "center",
  },
});
