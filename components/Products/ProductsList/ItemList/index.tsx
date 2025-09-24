import FavIcon from "@/components/Icons/FavIcon";
import { Colors, Fonts } from "@/constants";
import { rf, rh, rw } from "@/utils/dimensions";
import { ImageBackground } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ItemListProduct() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imgContainer} source={undefined}>
        <FavIcon />
      </ImageBackground>
      <View style={styles.txtContainer}>
        <Text numberOfLines={1} allowFontScaling style={styles.title}>
          Product Name
        </Text>
        <Text
          numberOfLines={1}
          allowFontScaling
          minimumFontScale={0.5}
          style={styles.price}
        >
          $999999999
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: rw(159),
    height: rh(281),
    backgroundColor: Colors.secBg,
    borderRadius: rw(8),
  },
  imgContainer: {
    alignItems: "flex-end",
    paddingHorizontal: rw(8),
    paddingTop: rh(5),
    height: rh(215),
  },
  txtContainer: {
    paddingHorizontal: rw(4),
    paddingTop: rh(8),
    gap: rh(8),
  },
  title: {
    fontSize: rf(16),
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.text,
  },
  price: {
    fontSize: rf(18),
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.text,
    fontWeight: "bold",
  },
});
