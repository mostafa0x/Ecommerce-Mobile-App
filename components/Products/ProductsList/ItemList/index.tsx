import FavIcon from "@/components/Icons/FavIcon";
import { Colors, Fonts } from "@/constants";
import { ItemListProductType } from "@/types/ItemListProductType";
import { rf, rh, rw } from "@/utils/dimensions";
import { ImageBackground } from "expo-image";
import { useRouter } from "expo-router";
import { Skeleton } from "moti/skeleton";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function ItemListProduct({ isLoading, item }: ItemListProductType) {
  const router = useRouter();
  return (
    <>
      {isLoading ? (
        <View style={styles.skeletonContainer}>
          <Skeleton
            colorMode="light"
            width={styles.container.width}
            height={rh(250)}
          />
          <Skeleton
            colorMode="light"
            width={styles.container.width}
            height={rh(20)}
          />
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => !isLoading && router.push(`/Product/${item.id}`)}
          style={styles.container}
        >
          <ImageBackground style={styles.imgContainer} source={item?.images[0]}>
            <FavIcon />
          </ImageBackground>
          <View style={styles.txtContainer}>
            <Text numberOfLines={1} allowFontScaling style={styles.title}>
              {item?.title}
            </Text>
            <View style={styles.priceContainer}>
              <Text numberOfLines={1} style={styles.price}>
                ${item.priceAfterDis}
              </Text>
              <Text numberOfLines={1} style={styles.priceDiscount}>
                ${item.price}
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
    overflow: "hidden",
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
