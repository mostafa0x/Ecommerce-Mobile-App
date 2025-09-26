import BackButton from "@/components/BackButton/BackButton";
import Slider from "@/components/Slider";
import { rh, rw } from "@/utils/dimensions";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ProductScreen() {
  const { id } = useLocalSearchParams();
  const productId = parseInt(Array.isArray(id) ? id[0] : id);
  return (
    <View style={styles.container}>
      <View style={styles.appbarContainer}>
        <BackButton />
      </View>
      <View style={styles.sliderContainer}>
        <Slider />
      </View>
      <Text>{productId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: rh(63),
  },
  appbarContainer: {
    paddingHorizontal: rw(24),
  },
  sliderContainer: {
    marginTop: rh(24),
  },
  productContainer: {},
  btnsContainer: {},
  infoContainer: {},
});
