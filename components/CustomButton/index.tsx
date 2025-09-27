import { Colors, Fonts } from "@/constants";
import { useAppDispatch } from "@/hooks/useRedux";
import { addToCount } from "@/lib/store/CategoriesSlice";
import { CustomBtnColorsType, CustomBtnIconsType } from "@/types/CustomBtnType";
import { rf, rh, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import GoogleIcon from "../Icons/GoogleIcon";
import TrueIcon from "../Icons/TrueIcon";

function CustomButton({
  lable = "Empty",
  secLable,
  icon,
  color = "secBg",
  widthSize = 344,
  heightSize = 49,
  redirect,
  activeIcon,
}: {
  lable: string;
  secLable?: string;
  icon?: CustomBtnIconsType;
  activeIcon?: boolean;
  color: CustomBtnColorsType;
  redirect?: "/" | "/categories/All";
  metod?: "Fillter/sortBy";
  widthSize: number;
  heightSize?: number;
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handlePress = () => {
    redirect ? router.push(redirect) : dispatch(addToCount(1));
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.button,
        {
          width: rw(widthSize),
          height: rh(heightSize),
          justifyContent:
            secLable || activeIcon ? "space-between" : "flex-start",
        },
        icon
          ? undefined
          : secLable || activeIcon
          ? undefined
          : styles.withoutIcons,
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
      {secLable && (
        <Text
          style={[
            styles.labelBtn,
            { color: color == "secBg" ? Colors.text : "white" },
          ]}
        >
          {secLable}
        </Text>
      )}
      {activeIcon && <TrueIcon />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: rw(100),
    flexDirection: "row",
    alignItems: "center",
    gap: rw(53),
    paddingHorizontal: rw(17.42),
  },
  labelBtn: {
    fontFamily: Fonts.circularstdmedium500,
    fontSize: rf(16),
    fontWeight: "bold",
  },
  withoutIcons: {
    paddingLeft: rw(0),
    justifyContent: "center",
  },
});

export default memo(CustomButton);
