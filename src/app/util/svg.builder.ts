import { SvgModel } from '../old/svg.model';

export class SvgBuilder {
  static build(
    paths: SvgModel['paths'],
    color: SvgModel['color'],
    args: SvgModel['args'] = {
      scale: 1,
      strokeWidth: 0,
      fill: true,
    },
  ): SvgModel {
    return { paths, color, args };
  }
}
