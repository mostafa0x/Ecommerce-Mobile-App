import BackButton from "@/components/BackButton/BackButton";
import FilltersByCategories from "@/components/FilltersByCategories";
import SearchbarFC from "@/components/SearchbarFC";
import { Colors, Fonts } from "@/constants";
import { rf, rh, rw } from "@/utils/dimensions";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SerachScreen() {
  const { q } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <View style={styles.appbarContainer}>
        <BackButton />
        <SearchbarFC widthSize={293} />
      </View>
      <View style={styles.listCategory}>
        <Text style={styles.title}>Shop by Categories</Text>
        <FilltersByCategories />
      </View>
      <Text>{q}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: rw(24), paddingTop: rh(63) },
  appbarContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: rw(9),
  },
  title: {
    fontFamily: Fonts.circularstdmedium500,
    fontSize: rf(24),
    color: Colors.text,
    fontWeight: "bold",
    marginBottom: rh(14),
  },
  listCategory: {
    marginTop: rh(34),
  },
});
