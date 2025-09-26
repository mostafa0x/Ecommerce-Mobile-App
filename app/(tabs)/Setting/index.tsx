import AvatarFC from "@/components/AvatarFC";
import BackButton from "@/components/BackButton/BackButton";
import SettingButton from "@/components/SettingButton";
import SettingCard from "@/components/Settings/Card";
import SignoutButton from "@/components/SignoutButton";
import { rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function Setting() {
  return (
    <View style={styles.container}>
      <View style={styles.appbarContainer}>
        <BackButton />
      </View>
      <View style={styles.upperContainer}>
        <AvatarFC size={80} />
      </View>
      <View style={styles.cardContainer}>
        <SettingCard />
      </View>
      <View style={styles.btnContainer}>
        <SettingButton label="Wishlsit" />
        <SettingButton label="About Us" />

        <SettingButton label="Help" />
      </View>
      <View style={styles.signoutContainer}>
        <SignoutButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  appbarContainer: {
    paddingTop: rh(100),
    paddingHorizontal: rw(24),
    paddingBottom: rh(29),
  },
  cardContainer: {
    paddingHorizontal: rw(24),

    marginTop: rh(32),
  },
  btnContainer: {
    paddingHorizontal: rw(24),
    marginTop: rh(32),
    gap: rh(8),
  },
  upperContainer: {
    paddingHorizontal: rw(155),
  },
  signoutContainer: {
    marginTop: rh(35),
    alignItems: "center",
  },
});
