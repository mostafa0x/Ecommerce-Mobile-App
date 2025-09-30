import { Colors } from "@/constants";
import { FilltersButtonType } from "@/types/FilltersButtonType";
import { rh, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import { Skeleton } from "moti/skeleton";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";

export default function FilltersButton({
  isLoading,
  item,
}: FilltersButtonType) {
  const router = useRouter();
  return (
    <>
      {isLoading ? (
        <Skeleton
          colorMode="light"
          width={styles.container.width}
          height={styles.container.height}
        />
      ) : (
        <TouchableOpacity
          onPress={() => router.push(`/categories/${item?.name}`)}
          style={styles.container}
        >
          <Avatar.Image
            style={styles.icon}
            size={rw(40)}
            source={{ uri: item?.image }}
          />
          <Text>{item?.name}</Text>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: rw(342),
    height: rh(64),
    borderRadius: rw(8),
    backgroundColor: Colors.secBg,
    gap: rw(16),
    alignItems: "center",
    flexDirection: "row",
    padding: rw(12),
  },
  icon: {
    backgroundColor: Colors.secBg,
  },
});
