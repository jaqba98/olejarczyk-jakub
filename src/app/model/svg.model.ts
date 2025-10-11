export interface SvgModel {
  paths: string[];
  args: {
    scale: number;
    strokeWidth: number;
    fill: boolean;
    transform: {
      left: number;
      top: number;
    };
  };
}
