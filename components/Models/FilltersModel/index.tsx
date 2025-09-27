import { useFillterModalContext } from "@/context/FillterModalContext";
import { rh, rw } from "@/utils/dimensions";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Modalize } from "react-native-modalize";
import HeaderModel from "./HeaderModel";
import PriceView from "./PriceView";
import SortByView from "./SortByView";

export default function FilltersModel() {
  const { modalRef, ClaerFillters, CloseModel, fillters } =
    useFillterModalContext();

  useEffect(() => {
    CloseModel();
    return () => {};
  }, []);

  return (
    <Modalize
      ref={modalRef}
      snapPoint={rw(424)}
      modalHeight={rw(424)}
      withHandle={false}
      modalStyle={styles.model}
      panGestureEnabled={false}
    >
      <HeaderModel
        label={fillters.type}
        CloseModel={CloseModel}
        ClaerFillters={ClaerFillters}
      />
      <View style={styles.contantContainer}>
        {fillters.type === "Price" && <PriceView />}
        {fillters.type === "Sort by" && <SortByView />}
      </View>
    </Modalize>
  );
}

const styles = StyleSheet.create({
  model: {},
  contantContainer: {
    paddingHorizontal: rw(24),
    paddingTop: rh(26),
    height: "70%",
  },
});
