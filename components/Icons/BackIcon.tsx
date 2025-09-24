import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const BackIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      stroke="#272727"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7.46 5.293 5.713 7.04a1.324 1.324 0 0 0 0 1.867l4.347 4.346m0-10.56-.693.694"
    />
  </Svg>
);
export default memo(BackIcon);
