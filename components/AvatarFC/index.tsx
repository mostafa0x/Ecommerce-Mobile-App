import { rw } from "@/utils/dimensions";
import { Skeleton } from "moti/skeleton";
import React, { memo } from "react";
import { Avatar } from "react-native-paper";

function AvatarFC({
  size = 40,
  isLoading,
}: {
  size: number;
  isLoading: boolean;
}) {
  return isLoading ? (
    <Skeleton
      colorMode="light"
      width={rw(size)}
      height={rw(40)}
      radius={"round"}
    />
  ) : (
    <Avatar.Image size={rw(size)} source={{ uri: undefined }} />
  );
}

export default memo(AvatarFC);
