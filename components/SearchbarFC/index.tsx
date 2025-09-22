import { Colors } from "@/constants";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import SearchIcon from "../Icons/SearchIcon";

export default function SearchbarFC() {
  const [q, setQ] = useState("");
  return (
    <View style={styles.container}>
      <Searchbar
        inputStyle={styles.serachbarInput}
        style={styles.serachbar}
        value={q}
        onChangeText={setQ}
        placeholder="Search"
        placeholderTextColor={Colors.text}
        icon={() => (
          <View style={styles.icon}>
            <SearchIcon />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: rw(24),
    paddingVertical: rh(24),
  },
  serachbar: {
    alignItems: "center",
    width: rw(342),
    height: rh(40),
    backgroundColor: Colors.secBg,
  },
  serachbarInput: {
    fontSize: rf(12),
    paddingBottom: rh(22),
    lineHeight: rh(24),
  },
  icon: {
    paddingTop: rh(10),
    paddingLeft: rw(5),
  },
});
