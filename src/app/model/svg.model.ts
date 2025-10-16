export interface SvgModel {
  paths: string[];
  color: string;
  args: {
    scale: number;
    strokeWidth: number;
    fill: boolean;
  };
}
