import BackButton from "@/components/BackButton/BackButton";
import CustomButton from "@/components/CustomButton";
import DescriptionProduct from "@/components/Products/Details/DescriptionProduct";
import InfoProduct from "@/components/Products/Details/InfoProduct";
import Shipping_Returns from "@/components/Products/Details/Shipping_Returns";
import Slider from "@/components/Slider";
import { rh, rw } from "@/utils/dimensions";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function ProductScreen() {
  const { id } = useLocalSearchParams();
  const productId = parseInt(Array.isArray(id) ? id[0] : id);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.appbarContainer}>
        <BackButton />
      </View>
      <View style={styles.sliderContainer}>
        <Slider />
      </View>
      <View style={styles.secContainer}>
        <View>
          <InfoProduct />
        </View>
        <View>
          <DescriptionProduct />
        </View>
        <View>
          <Shipping_Returns />
        </View>
        <View style={styles.btnBuy}>
          <CustomButton
            lable={"$100"}
            secLable="Add to Bag"
            color={"praimry"}
            redirect={"/"}
            widthSize={342}
            heightSize={52}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: rh(63),
    flexGrow: 1,
    paddingBottom: rh(25),
  },
  secContainer: {
    paddingHorizontal: rw(24),
    marginTop: rh(24),
    gap: rh(24),
  },
  appbarContainer: {
    paddingHorizontal: rw(24),
  },
  sliderContainer: {
    marginTop: rh(24),
  },
  btnBuy: {
    marginTop: rh(50),
  },
});
