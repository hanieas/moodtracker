import { CSSProperties, ReactNode } from "react";

export interface ISvgIconProps {
  readonly onClick?: any;
  readonly xmlns: string;
  readonly height: string;
  readonly width: string;
  readonly viewBox: string;
  readonly style?: CSSProperties;
  readonly pathFill?: string;
  readonly d?: string;
  readonly children?: ReactNode;
}
