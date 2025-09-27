import CloseIcon from "@/components/Icons/CloseIcon";
import { Colors, Fonts } from "@/constants";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function HeaderModel({
  label = "empty",
  CloseModel,
  ClaerFillters,
}: {
  label: string;
  CloseModel: () => void;
  ClaerFillters: () => void;
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnClaer} onPress={ClaerFillters}>
        <Text style={styles.labelClaer}>Claer</Text>
      </TouchableOpacity>
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
  btnClaer: {
    width: rw(52),
    height: rh(32),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default memo(HeaderModel);
