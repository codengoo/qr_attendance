import {ReactElement} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export type IconComponent = (props: IIconProps) => ReactElement;

export interface IIconProps extends SvgProps {
  color?: string;
  size?: number;
}

export function Bolt({size = 24, color = 'black', ...props}: IIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...props}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M13 2l.018.001.016.001.083.005.011.002h.011l.038.009.052.008.016.006.011.001.029.011.052.014.019.009.015.004.028.014.04.017.021.012.022.01.023.015.031.017.034.024.018.011.013.012.024.017.038.034.022.017.008.01.014.012.036.041.026.027.006.009c.12.147.196.322.218.513l.001.012.002.041L14 3v6h5a1 1 0 01.868 1.497l-.06.091-8 11C11.24 22.371 10 21.968 10 21v-6H5a1 1 0 01-.868-1.497l.06-.091 8-11 .01-.013.018-.024.033-.038.018-.022.009-.008.013-.014.04-.036.028-.026.008-.006a1 1 0 01.402-.199l.011-.001.027-.005.074-.013.011-.001.041-.002z" />
    </Svg>
  );
}

export function App({size = 24, color = 'black', ...props}: IIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...props}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M9 3H5a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2V5a2 2 0 00-2-2zM9 13H5a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2zM19 13h-4a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2zM17 3a1 1 0 01.993.883L18 4v2h2a1 1 0 01.117 1.993L20 8h-2v2a1 1 0 01-1.993.117L16 10V8h-2a1 1 0 01-.117-1.993L14 6h2V4a1 1 0 011-1z" />
    </Svg>
  );
}

export function Plus({size = 24, color = 'black', ...props}: IIconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke={color}
      strokeWidth={2}
      {...props}>
      <Path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <Path d="M12 5v14M5 12h14" />
    </Svg>
  );
}
