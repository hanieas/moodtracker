import { ISvgIconProps } from "./svg-icon-interface";

export const SvgIcon = (props: ISvgIconProps) => {
  const { onClick, xmlns, height, width, style, pathFill, d } = props;
  return (
    <svg
      onClick={onClick}
      xmlns={xmlns}
      height={height}
      viewBox="0 0 24 24"
      width={width}
      style={style}
    >
      {d ? <path fill={pathFill} d={d}></path> : ""}
      {props.children}
    </svg>
  );
};
