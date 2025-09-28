import { Colors, Fonts } from "@/constants";
import { ItemListCategoryType } from "@/types/ItemListCategoryType";
import { rf, rh, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import { Skeleton } from "moti/skeleton";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";

export default function ItemListCategory({
  title,
  isLoading,
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
          onPress={() => !isLoading && router.push(`/categories/${title}`)}
          style={styles.container}
        >
          <Avatar.Image size={rw(56)} source={{ uri: undefined }} />
          <Text numberOfLines={1} style={styles.title}>
            {title}
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
  },
});
