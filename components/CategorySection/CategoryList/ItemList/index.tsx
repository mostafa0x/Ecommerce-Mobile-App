import { Colors, Fonts } from "@/constants";
import { ItemListCategoryType } from "@/types/ItemListCategoryType";
import { rf, rh, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import { Skeleton } from "moti/skeleton";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";

export default function ItemListCategory({
  isLoading,
  item,
}: ItemListCategoryType) {
  const router = useRouter();
  return (
    <>
      {isLoading ? (
        <Skeleton
          colorMode="light"
          width={rw(56)}
          radius={"round"}
          height={rw(56)}
        />
      ) : (
        <TouchableOpacity
          onPress={() => !isLoading && router.push(`/categories/${item.name}`)}
          style={styles.container}
        >
          <Avatar.Image
            style={styles.img}
            size={rw(56)}
            source={{ uri: item.image }}
          />
          <Text numberOfLines={1} style={styles.title}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: rw(56),
    height: rh(90),
    alignItems: "center",
    gap: rh(5),
  },

  title: {
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.text,
    fontSize: rf(12),
    width: rw(54),
    textAlign: "center",
  },
  img: {
    backgroundColor: Colors.secBg,
  },
});
