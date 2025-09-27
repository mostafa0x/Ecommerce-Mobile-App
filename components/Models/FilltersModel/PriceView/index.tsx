import CustomInput from "@/components/CustomInput";
import { rh } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function PriceView() {
  return (
    <View style={styles.container}>
      <CustomInput
        inputType="number"
        placeholder={"Min"}
        type={"fillter/min"}
      />
      <CustomInput
        inputType="number"
        placeholder={"Max"}
        type={"fillter/max"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: rh(16),
  },
});
