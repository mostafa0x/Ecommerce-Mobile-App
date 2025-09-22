import CustomButton from "@/components/CustomButton";
import { Colors } from "@/constants";
import { rf, rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>FoFo Store</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("@/assets/images/loginImage.jpg")}
        />
      </View>
      <CustomButton
        lable="Continue With Google"
        color="secBg"
        icon="google"
        redirect="/"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: rw(25),
    marginTop: rh(123),
  },
  header: {},
  headerTxt: {
    fontSize: rf(32),
    fontWeight: "700",
    color: Colors.text,
  },
  imgContainer: {
    marginTop: rh(70),
    marginBottom: rh(50),
  },
  img: {
    width: rw(325),
    height: rh(225),
    borderRadius: rw(25),
  },
});
