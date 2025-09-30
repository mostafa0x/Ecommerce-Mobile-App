import useCategories from "@/hooks/useCategories";
import { rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, View } from "react-native";
import CategoryList from "./CategoryList";
import UpperSide from "./UpperSide/indext";

export default function CategorySection() {
  const { categories, isLoading } = useCategories();
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <UpperSide />
      </View>
      <View style={styles.list}></View>
      <CategoryList isLoading={isLoading} data={categories} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: rh(10) },
  upperContainer: {
    paddingHorizontal: rw(24),
  },
  list: { marginTop: rh(16) },
});
