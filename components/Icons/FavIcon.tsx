import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const FavIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      stroke="#272727"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.727 7.315c.586.66.94 1.526.94 2.48 0 4.666-4.32 7.42-6.254 8.086-.226.08-.6.08-.826 0-1.934-.666-6.254-3.42-6.254-8.086 0-2.06 1.66-3.727 3.707-3.727 1.213 0 2.287.587 2.96 1.493a3.687 3.687 0 0 1 2.96-1.493"
    />
  </Svg>
);
export default memo(FavIcon);
