import { Colors, Fonts } from "@/constants";
import { CustomBtnColorsType, CustomBtnIconsType } from "@/types/CustomBtnType";
import { rf, rh, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import GoogleIcon from "../Icons/GoogleIcon";

function CustomButton({
  lable = "Empty",
  icon,
  color = "secBg",
  widthSize = 344,
  redirect,
}: {
  lable: string;
  icon?: CustomBtnIconsType;
  color: CustomBtnColorsType;
  redirect: "/" | "/categories/All";
  widthSize: number;
}) {
  const router = useRouter();

  const handlePress = () => {
    redirect ? router.push(redirect) : null;
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.button,
        { width: widthSize },
        icon ? undefined : styles.withoutIcons,
        { backgroundColor: Colors[color] },
      ]}
    >
      {icon === "google" && <GoogleIcon />}
      <Text
        style={[
          styles.labelBtn,
          { color: color == "secBg" ? Colors.text : "white" },
        ]}
      >
        {lable}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: rh(49),
    borderRadius: rw(100),
    flexDirection: "row",
    alignItems: "center",
    gap: rw(53),
    paddingLeft: rw(17.42),
  },
  labelBtn: {
    fontFamily: Fonts.circularstdmedium500,
    fontSize: rf(16),
  },
  withoutIcons: {
    paddingLeft: rw(0),

    justifyContent: "center",
  },
});

export default memo(CustomButton);
