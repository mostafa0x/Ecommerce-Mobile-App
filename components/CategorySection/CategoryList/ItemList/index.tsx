import { Colors, Fonts } from "@/constants";
import { ItemListCategoryType } from "@/types/ItemListCategoryType";
import { rf, rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

export default function ItemListCategory({ title }: ItemListCategoryType) {
  return (
    <View style={styles.container}>
      <Avatar.Image size={rw(56)} source={{ uri: undefined }} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: rw(56),
    height: rh(90),
    alignItems: "center",
    gap: rh(5),
    marginRight: rw(13.25),
  },

  title: {
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.text,
    fontSize: rf(12),
  },
});
