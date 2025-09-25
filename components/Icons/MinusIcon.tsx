import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const MinusIcon = (props: SvgProps) => (
  <Svg width={36} height={36} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      stroke="#F4F4F4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 6.5h1m-6 0h2.83"
    />
  </Svg>
);
export default memo(MinusIcon);
