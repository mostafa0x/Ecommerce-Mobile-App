import { Colors } from "@/constants";
import { MiniButtonType } from "@/types/MiniButtonType";
import { rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AddIcon from "../Icons/AddIcon";
import MinusIcon from "../Icons/MinusIcon";

function MiniButton({ type = "add" }: MiniButtonType) {
  return (
    <TouchableOpacity style={styles.container}>
      {type === "add" ? <AddIcon /> : <MinusIcon />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: rw(24),
    height: rw(24),
    borderRadius: rw(100),
    backgroundColor: Colors.praimry,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: rw(14),
    paddingTop: rh(16),
  },
});

export default memo(MiniButton);
