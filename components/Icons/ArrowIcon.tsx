import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const ArrowIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      stroke="#272727"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m12.9 7.94 2.62 2.62c.77.77.77 2.03 0 2.8L9 19.87M9 4.04l1.04 1.04"
    />
  </Svg>
);
export default memo(ArrowIcon);
