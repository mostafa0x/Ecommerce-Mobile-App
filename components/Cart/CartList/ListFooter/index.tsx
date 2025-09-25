import CustomButton from "@/components/CustomButton";
import { rh } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import ListFooterItem from "./Item";
function ListFooterCart() {
  return (
    <View style={styles.listFooterContainer}>
      <View style={styles.info}>
        <ListFooterItem label="Subtotal" value={200} />
        <ListFooterItem label="Shipping Cost" value={0} />
        <ListFooterItem label="Tax" value={0} />
        <ListFooterItem label="Total" value={0} />
      </View>
      <View style={styles.btnContainer}>
        <CustomButton
          lable={"Checkout"}
          color={"praimry"}
          redirect={"/"}
          widthSize={342}
          heightSize={52}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listFooterContainer: {
    marginTop: rh(120),
  },
  info: {
    gap: rh(12),
  },
  btnContainer: {
    marginTop: rh(31),
  },
});

export default memo(ListFooterCart);
