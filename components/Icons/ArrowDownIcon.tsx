import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const ArrowDownIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m10.673 9.067-1.746 1.746a1.324 1.324 0 0 1-1.867 0L2.72 6.467m10.56 0-.693.693"
    />
  </Svg>
);
export default memo(ArrowDownIcon);
