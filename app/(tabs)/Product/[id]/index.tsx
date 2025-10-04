import BackButton from "@/components/BackButton/BackButton";
import CustomButton from "@/components/CustomButton";
import DescriptionProduct from "@/components/Products/Details/DescriptionProduct";
import InfoProduct from "@/components/Products/Details/InfoProduct";
import Shipping_Returns from "@/components/Products/Details/Shipping_Returns";
import Slider from "@/components/Slider";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { getProductById } from "@/lib/store/MainSlice";
import { rh, rw } from "@/utils/dimensions";
import { useLocalSearchParams } from "expo-router";
import { Skeleton } from "moti/skeleton";
import React, { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function ProductScreen() {
  const { id } = useLocalSearchParams();

  const productId = parseInt(Array.isArray(id) ? id[0] : id);
  const { prdouctById, isLoadingPrdouctById } = useAppSelector(
    (state) => state.MainReducer
  );
  const disPatch = useAppDispatch();
  useEffect(() => {
    disPatch(getProductById(productId));
    return () => {};
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.appbarContainer}>
        <BackButton />
      </View>
      <View style={styles.sliderContainer}>
        {isLoadingPrdouctById ? (
          <View style={styles.sliderSkeleton}>
            <Skeleton
              show={isLoadingPrdouctById}
              colorMode="light"
              width={styles.sliderSkeleton.width}
              height={styles.sliderSkeleton.height}
            />
          </View>
        ) : (
          <Slider data={prdouctById?.images ?? []} />
        )}
      </View>
      <View style={styles.secContainer}>
        <View>
          <Skeleton colorMode="light" show={isLoadingPrdouctById}>
            <InfoProduct
              data={{
                name: prdouctById?.title ?? "",
                price: prdouctById?.price ?? 0,
                disPrice: prdouctById?.priceAfterDis ?? 0,
              }}
            />
          </Skeleton>
        </View>
        <View>
          <Skeleton colorMode="light" show={isLoadingPrdouctById}>
            <DescriptionProduct description={prdouctById?.description ?? ""} />
          </Skeleton>
        </View>
        <View>
          <Skeleton colorMode="light" show={isLoadingPrdouctById}>
            <Shipping_Returns />
          </Skeleton>
        </View>
        <View style={styles.btnBuy}>
          <Skeleton colorMode="light" show={isLoadingPrdouctById}>
            <CustomButton
              lable={`$${prdouctById?.priceAfterDis ?? 0}`}
              secLable="Add to Bag"
              color={"praimry"}
              redirect={"/"}
              widthSize={342}
              heightSize={52}
            />
          </Skeleton>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: rh(63),
    flexGrow: 1,
    paddingBottom: rh(25),
  },
  secContainer: {
    paddingHorizontal: rw(24),
    marginTop: rh(24),
    gap: rh(24),
  },
  appbarContainer: {
    paddingHorizontal: rw(24),
  },
  sliderContainer: {
    marginTop: rh(24),
  },
  sliderSkeleton: {
    width: rw(340),
    height: rh(100),
    paddingHorizontal: rw(24),
  },
  btnBuy: {
    marginTop: rh(50),
  },
});
