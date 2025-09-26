import useSerachHandler from "@/hooks/useSerachHandler";
import { rw } from "@/utils/dimensions";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { Modalize } from "react-native-modalize";
import HeaderModel from "./HeaderModel";

export default function FilltersModel() {
  const { modelRef, OpenModel, CloseModel, fillters } = useSerachHandler();

  useEffect(() => {
    OpenModel();

    return () => {};
  }, []);

  return (
    <Modalize
      snapPoint={rw(424)}
      modalHeight={rw(424)}
      withHandle={false}
      modalStyle={styles.model}
      closeOnOverlayTap={false}
      panGestureEnabled={false}
      ref={modelRef}
    >
      <HeaderModel label={fillters.type} CloseModel={CloseModel} />
    </Modalize>
  );
}

const styles = StyleSheet.create({
  model: {},
});
