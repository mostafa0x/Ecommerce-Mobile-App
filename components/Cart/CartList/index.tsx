import CustomButton from "@/components/CustomButton";
import { Colors, Fonts } from "@/constants";
import { rf, rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import React, { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import CartItem from "./item";

export default function CartList() {
  const renderItem = useCallback(() => {
    return <CartItem />;
  }, []);

  const listEmpty = useCallback(() => {
    return (
      <View style={styles.containerEmptyList}>
        <Image
          style={styles.img}
          contentFit="contain"
          cachePolicy={"memory-disk"}
          source={require("@/assets/images/cart.png")}
        />
        <Text style={styles.titleEmptyList}>Your Cart is Empty</Text>
        <CustomButton
          widthSize={185}
          lable={"Explore Categoies"}
          color={"praimry"}
          redirect={"/categories/All"}
        />
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text>CartList</Text>
      <FlashList
        numColumns={1}
        data={[]}
        renderItem={renderItem}
        ListEmptyComponent={listEmpty}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  containerEmptyList: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: rh(201),
    gap: rh(27),
  },
  img: {
    width: rw(100),
    height: rh(100),
  },
  titleEmptyList: {
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.text,
    fontSize: rf(24),
  },
});
