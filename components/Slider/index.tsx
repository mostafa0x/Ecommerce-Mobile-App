import { rh, rw } from "@/utils/dimensions";
import * as React from "react";
import { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import Carousel from "react-native-reanimated-carousel";
import SliderItem from "./Item";

function Slider({ data = [] }: { data: string[] }) {
  const ref = React.useRef<ICarouselInstance>(null);

  const renderItem = useCallback(({ item }: { item: string }) => {
    return <SliderItem item={item} />;
  }, []);

  return (
    <View>
      <Carousel
        ref={ref}
        data={data}
        height={styles.slider.height}
        width={styles.slider.width}
        loop
        autoPlay
        autoPlayInterval={2000}
        mode="horizontal-stack"
        modeConfig={{
          showLength: 2,
          stackInterval: rw(170),
          scaleInterval: 0,
          snapDirection: "left",
        }}
        scrollAnimationDuration={1000}
        pagingEnabled={true}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  slider: {
    height: rh(250),
    width: rw(390),
  },
});

export default Slider;
