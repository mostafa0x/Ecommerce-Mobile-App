import AvatarFC from "@/components/AvatarFC";
import SettingButton from "@/components/SettingButton";
import SignoutButton from "@/components/SignoutButton";
import { rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Setting() {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <AvatarFC size={80} />
      </View>
      <View style={styles.btnContainer}>
        <SettingButton label="Help" />
        <View style={styles.signoutContainer}>
          <SignoutButton />
        </View>
      </View>
      <Text>Setting</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: rh(129),
    justifyContent: "center",
  },
  btnContainer: { paddingHorizontal: rw(24) },
  upperContainer: {
    paddingHorizontal: rw(155),
  },
  signoutContainer: {
    alignItems: "center",
  },
});
