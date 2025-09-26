import { rf } from "@/utils/dimensions";
import React, { memo } from "react";
import { Avatar } from "react-native-paper";

function AvatarFC({ size = 40 }) {
  return <Avatar.Image size={rf(size)} source={{ uri: undefined }} />;
}

export default memo(AvatarFC);
