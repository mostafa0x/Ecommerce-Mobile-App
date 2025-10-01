import BackButton from "@/components/BackButton/BackButton";
import FilltersByCategories from "@/components/FilltersByCategories";
import ProductsList from "@/components/Products/ProductsList";
import { Colors, Fonts } from "@/constants";
import { useFillterModalContext } from "@/context/FillterModalContext";
import { useAppSelector } from "@/hooks/useRedux";
import { CategoriesType } from "@/types/CategoriesType";
import { rf, rh, rw } from "@/utils/dimensions";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Category() {
  const { id = "All" } = useLocalSearchParams();
  const category = (Array.isArray(id) ? id[0] : id) as CategoriesType;
  const { fillterProducts, setFillters, setQ, fillters } =
    useFillterModalContext();
  const { isLoadingProducts } = useAppSelector((state) => state.MainReducer);
  console.log(id);

  useEffect(() => {
    setFillters((prev) => ({
      ...prev,
      category: category,
      type: category === "All" ? "Price" : "other",
    }));
    return () => {
      console.log("bye");

      setFillters((prev) => ({ ...prev, category: "All", type: "other" }));
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <BackButton />
        <Text style={styles.title}>
          {category === "All" ? "Shop by Categories" : category}
        </Text>
      </View>
      <View style={styles.btnsContainer}></View>
      {category === "All" ? (
        <FilltersByCategories />
      ) : (
        <ProductsList
          data={fillterProducts}
          isLoading={isLoadingProducts}
          calledFrom="fillter"
        />
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
