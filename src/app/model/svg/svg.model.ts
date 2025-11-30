interface SvgColor {
  light: string;
  dark: string;
}

interface SvgArgs {
  scale: number;
  strokeWidth: number;
  fill: boolean;
}

export interface SvgModel {
  paths: string[];
  color: SvgColor;
  args: SvgArgs;
}
