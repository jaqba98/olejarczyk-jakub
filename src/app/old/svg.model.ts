export interface SvgModel {
  paths: string[];
  color: {
    light: string;
    dark: string;
  };
  args: {
    scale: number;
    strokeWidth: number;
    fill: boolean;
  };
}
