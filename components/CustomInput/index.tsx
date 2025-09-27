import { Colors, Fonts } from "@/constants";
import { useFillterModalContext } from "@/context/FillterModalContext";
import { GetFilltersValues } from "@/service/GetFilltersValues";
import { SetFilltersValues } from "@/service/SetFilltersValues";
import { CustomInputType } from "@/types/CustomInputType";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, TextInput, View } from "react-native";

function CustomInput({
  placeholder = "empty",
  inputType = "number",
  type,
}: CustomInputType) {
  const { fillters, setFillters } = useFillterModalContext();
  const va = GetFilltersValues(type, fillters);
  function changeValuesHandler(text: string) {
    SetFilltersValues(type, setFillters, text);
  }

  return (
    <View>
      <TextInput
        value={va}
        placeholder={placeholder}
        keyboardType={inputType === "number" ? "numeric" : "default"}
        inputMode={inputType === "number" ? "numeric" : "none"}
        onChangeText={changeValuesHandler}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.secBg,
    borderRadius: rw(100),
    width: rw(342),
    height: rh(56),
    paddingHorizontal: rw(12),
    fontFamily: Fonts.circularstdmedium500,
    color: Colors.text,
    fontSize: rf(16),
  },
});

export default memo(CustomInput);
