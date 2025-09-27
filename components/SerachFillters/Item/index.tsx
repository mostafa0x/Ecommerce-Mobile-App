import ArrowDownIcon from "@/components/Icons/ArrowDownIcon";
import { Colors, Fonts } from "@/constants";
import { TypeFillter } from "@/types/FilltersType";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function SerachFillters_Item({
  label = "Price",
  icon = false,
  active = false,
  setFilterType,
}: {
  label: TypeFillter;
  icon?: boolean;
  active: boolean;
  setFilterType: (label: TypeFillter) => void;
}) {
  return (
    <TouchableOpacity
      onPress={() => setFilterType(label)}
      style={[styles.container, active && styles.active]}
    >
      <Text style={[styles.label, active && styles.active_label]}>{label}</Text>
      {icon && <ArrowDownIcon />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "auto",
    height: rh(27),
    backgroundColor: Colors.secBg,
    borderRadius: rw(100),
    paddingHorizontal: rw(8),
    paddingVertical: rh(4),
    flexDirection: "row",
    justifyContent: "center",
    gap: rw(4),
  },
  active: {
    backgroundColor: Colors.praimry,
  },
  label: {
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.text,

    fontSize: rf(16),
  },
  active_label: {
    color: "white",
  },
});

export default memo(SerachFillters_Item);
