interface SvgColorModel {
  fill: string;
  stroke: string;
}

interface SvgPathModel extends SvgColorModel {
  value: string;
}

export interface SvgModel extends SvgColorModel {
  paths: SvgPathModel[];
  width: string;
  height: string;
  viewBox: string;
}
