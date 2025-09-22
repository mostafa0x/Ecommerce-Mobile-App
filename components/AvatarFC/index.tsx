import { rf } from "@/utils/dimensions";
import React from "react";
import { Avatar } from "react-native-paper";

export default function AvatarFC() {
  return <Avatar.Image size={rf(40)} source={{ uri: undefined }} />;
}
