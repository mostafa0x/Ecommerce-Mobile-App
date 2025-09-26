import { useFillterModalContext } from "@/context/FillterModalContext";
import { rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet } from "react-native";
import { Modalize } from "react-native-modalize";
import HeaderModel from "./HeaderModel";

export default function FilltersModel() {
  const { modalRef, OpenModel, CloseModel, fillters } =
    useFillterModalContext();

  return (
    <Modalize
      ref={modalRef}
      snapPoint={rw(424)}
      modalHeight={rw(424)}
      withHandle={false}
      modalStyle={styles.model}
      closeOnOverlayTap={false}
      panGestureEnabled={false}
    >
      <HeaderModel label={fillters.type} CloseModel={CloseModel} />
    </Modalize>
  );
}

const styles = StyleSheet.create({
  model: {},
});
