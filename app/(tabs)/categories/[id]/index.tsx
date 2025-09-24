import BackButton from "@/components/BackButton/BackButton";
import { Colors, Fonts } from "@/constants";
import { rf, rh, rw } from "@/utils/dimensions";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Category() {
  const { id } = useLocalSearchParams();
  const category = Array.isArray(id) ? id[0] : id;
  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <BackButton />
        <Text style={styles.title}>Shop by Categories</Text>
      </View>
      <View style={styles.btnsContainer}></View>
      <Text>{category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: rh(63),
    paddingHorizontal: rw(27),
  },
  upperSection: {
    gap: rh(16),
    marginBottom: rh(16),
  },
  title: {
    fontFamily: Fonts.circularstdmedium500,
    fontSize: rf(24),
    color: Colors.text,
    fontWeight: "bold",
  },
  btnsContainer: {},
});
