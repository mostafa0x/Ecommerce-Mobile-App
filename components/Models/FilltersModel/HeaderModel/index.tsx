import CloseIcon from "@/components/Icons/CloseIcon";
import { Colors, Fonts } from "@/constants";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function HeaderModel({
  label = "empty",
  CloseModel,
}: {
  label: string;
  CloseModel: () => void;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.labelClaer}>Claer</Text>
      <Text style={styles.labelFillter}>{label}</Text>
      <TouchableOpacity onPress={CloseModel}>
        <CloseIcon />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: rw(26),
    paddingVertical: rh(19),
  },
  labelClaer: {
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.text,
    fontSize: rf(16),
  },
  labelFillter: {
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.text,
    fontSize: rf(24),
    fontWeight: "bold",
  },
});

export default memo(HeaderModel);
