import { rh, rw } from "@/utils/dimensions";
import * as React from "react";
import { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import Carousel from "react-native-reanimated-carousel";
import SliderItem from "./Item";

const defaultDataWith6Colors = [1, 2, 3, 4, 5];

function Slider() {
  const ref = React.useRef<ICarouselInstance>(null);

  const renderItem = useCallback(() => {
    return <SliderItem />;
  }, []);

  return (
    <View id="carousel-component">
      <Carousel
        ref={ref}
        data={defaultDataWith6Colors}
        height={styles.slider.height}
        width={styles.slider.width}
        loop
        autoPlay
        autoPlayInterval={2000}
        mode="horizontal-stack"
        modeConfig={{
          showLength: 4,
          stackInterval: rw(170),
          scaleInterval: 0,
          snapDirection: "left",
        }}
        customConfig={() => ({
          viewCount: 3,
        })}
        scrollAnimationDuration={1000}
        pagingEnabled={true}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  slider: {
    height: rh(250),
    width: rw(390),
  },
});

export default Slider;
