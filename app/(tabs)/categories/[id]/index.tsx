import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Category() {
  const { id } = useLocalSearchParams();
  const category = Array.isArray(id) ? id[0] : id;
  return (
    <View>
      <Text>jhkgj</Text>
      <Text>{category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
