import CustomButton from "@/components/CustomButton";
import { Colors, Fonts } from "@/constants";
import { rf, rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import React, { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import CartItem from "./item";
import ListFooterCart from "./ListFooter";
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

  const itemSeparator = useCallback(() => {
    return <View style={styles.itemSeparator}></View>;
  }, []);

  return (
    <View style={styles.container}>
      <Button
        onPress={() => console.log("x")}
        labelStyle={styles.lableBtn}
        style={styles.btn}
      >
        Remove All
      </Button>
      <FlashList
        contentContainerStyle={styles.contentContainer}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        numColumns={1}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparator}
        ListEmptyComponent={listEmpty}
        ListFooterComponent={<ListFooterCart />}
        showsVerticalScrollIndicator={false}
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
  btn: {
    alignItems: "flex-end",
    marginTop: rh(34),
    marginBottom: rh(16),
  },
  lableBtn: {
    fontFamily: Fonts.circularstdmedium500,
    fontSize: rf(16),
    color: Colors.text,
  },
  itemSeparator: {
    height: rh(8),
  },
  contentContainer: {
    paddingBottom: rh(120),
  },
});
