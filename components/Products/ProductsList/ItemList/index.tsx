import FavIcon from "@/components/Icons/FavIcon";
import { Colors, Fonts } from "@/constants";
import { ItemListProductType } from "@/types/ItemListProductType";
import { rf, rh, rw } from "@/utils/dimensions";
import { ImageBackground } from "expo-image";
import { useRouter } from "expo-router";
import { Skeleton } from "moti/skeleton";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function ItemListProduct({ isLoading }: ItemListProductType) {
  const router = useRouter();
  return (
    <>
      {isLoading ? (
        <View style={styles.skeletonContainer}>
          <Skeleton width={styles.container.width} height={rh(250)} />
          <Skeleton width={styles.container.width} height={rh(20)} />
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => !isLoading && router.push("/Product/3")}
          style={styles.container}
        >
          <ImageBackground style={styles.imgContainer} source={undefined}>
            <FavIcon />
          </ImageBackground>
          <View style={styles.txtContainer}>
            <Text numberOfLines={1} allowFontScaling style={styles.title}>
              Product Name
            </Text>
            <View style={styles.priceContainer}>
              <Text numberOfLines={1} style={styles.price}>
                $999999
              </Text>
              <Text numberOfLines={1} style={styles.priceDiscount}>
                $2999
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: rw(159),
    height: rh(281),
    backgroundColor: Colors.secBg,
    borderRadius: rw(8),
  },
  imgContainer: {
    alignItems: "flex-end",
    paddingHorizontal: rw(8),
    paddingTop: rh(5),
    height: rh(215),
  },
  txtContainer: {
    paddingHorizontal: rw(4),
    paddingTop: rh(8),
    gap: rh(8),
  },
  title: {
    fontSize: rf(16),
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.text,
  },
  priceContainer: {
    flexDirection: "row",
    gap: rw(8),
  },
  price: {
    fontSize: rf(18),
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.text,
    fontWeight: "bold",
  },
  priceDiscount: {
    fontSize: rf(14),
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.secText,
    fontWeight: "bold",
    textAlignVertical: "center",
    width: rw(70),
    textDecorationLine: "line-through",
  },
  skeletonContainer: {
    gap: rh(10),
  },
});

export default memo(ItemListProduct);
