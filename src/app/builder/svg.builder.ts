import { SvgModel } from '../model/svg.model';

export class SvgBuilder {
  static build(
    paths: SvgModel['paths'],
    args: SvgModel['args'] = {
      scale: 1,
      strokeWidth: 0,
      fill: true,
    },
  ): SvgModel {
    return { paths, args };
  }
}
