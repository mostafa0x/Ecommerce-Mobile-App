import { Colors } from "@/constants";
import { FilltersButtonType } from "@/types/FilltersButtonType";
import { rh, rw } from "@/utils/dimensions";
import { Skeleton } from "moti/skeleton";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

export default function FilltersButton({
  isLoading = true,
}: FilltersButtonType) {
  return (
    <>
      {isLoading ? (
        <Skeleton
          width={styles.container.width}
          height={styles.container.height}
        />
      ) : (
        <View style={styles.container}>
          <Avatar.Image
            style={styles.icon}
            size={rw(40)}
            source={{ uri: undefined }}
          />
          <Text>FilltersByCategories</Text>
        </View>
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
