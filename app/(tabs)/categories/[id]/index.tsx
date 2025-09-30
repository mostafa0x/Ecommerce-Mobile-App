import BackButton from "@/components/BackButton/BackButton";
import FilltersByCategories from "@/components/FilltersByCategories";
import ProductsList from "@/components/Products/ProductsList";
import { Colors, Fonts } from "@/constants";
import useCategories from "@/hooks/useCategories";
import { useAppSelector } from "@/hooks/useRedux";
import { CategoriesType } from "@/types/CategoriesType";
import { rf, rh, rw } from "@/utils/dimensions";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Category() {
  const { id } = useLocalSearchParams();
  const category = (Array.isArray(id) ? id[0] : id) as CategoriesType;
  const { categories } = useAppSelector((state) => state.MainReducer);
  const {} = useCategories();
  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <BackButton />
        <Text style={styles.title}>
          {category === "All" ? "Shop by Categories" : category}
        </Text>
      </View>
      <View style={styles.btnsContainer}></View>
      {category == "All" ? (
        <FilltersByCategories isLoading={false} data={categories} />
      ) : (
        <ProductsList isLoading calledFrom="fillter" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: rh(63),
  },
  upperSection: {
    gap: rh(16),
    marginBottom: rh(16),
    paddingHorizontal: rw(27),
  },
  title: {
    fontFamily: Fonts.circularstdmedium500,
    fontSize: rf(24),
    color: Colors.text,
    fontWeight: "bold",
  },
  btnsContainer: {},
});
