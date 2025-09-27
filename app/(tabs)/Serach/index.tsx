import BackButton from "@/components/BackButton/BackButton";
import FilltersByCategories from "@/components/FilltersByCategories";
import FilltersModel from "@/components/Models/FilltersModel";
import ProductsList from "@/components/Products/ProductsList";
import SearchbarFC from "@/components/SearchbarFC";
import SerachFillters from "@/components/SerachFillters";
import { Colors, Fonts } from "@/constants";
import { rf, rh, rw } from "@/utils/dimensions";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SerachScreen() {
  const { q } = useLocalSearchParams();
  const words = Array.isArray(q) ? q[0] : q;
  return (
    <View style={styles.container}>
      <View style={styles.appbarContainer}>
        <BackButton />
        <SearchbarFC widthSize={293} />
      </View>
      {q ? (
        <View style={styles.serachingContainer}>
          <View style={styles.fillterContainer}>
            <SerachFillters />
            <Text style={styles.labelResults}>56 Results Found</Text>
          </View>
          <ProductsList calledFrom={"fillter"} />
        </View>
      ) : (
        <View style={styles.listCategory}>
          <Text style={styles.title}>Shop by Categories</Text>
          <FilltersByCategories />
        </View>
      )}
      <Text>{words}</Text>
      <FilltersModel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: rh(63) },
  appbarContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: rw(9),
    paddingHorizontal: rw(24),
  },
  title: {
    fontFamily: Fonts.circularstdmedium500,
    fontSize: rf(24),
    color: Colors.text,
    fontWeight: "bold",
    marginBottom: rh(14),
    paddingHorizontal: rw(24),
  },
  listCategory: {
    marginTop: rh(34),
  },
  labelResults: {
    fontFamily: Fonts.circularstdmedium500,
    fontSize: rf(14),
    color: Colors.text,
  },
  serachingContainer: {
    marginTop: rh(0),
  },
  fillterContainer: {
    paddingHorizontal: rw(24),
    paddingTop: rh(24),
    paddingBottom: rh(16),
    gap: rh(17),
  },
});
