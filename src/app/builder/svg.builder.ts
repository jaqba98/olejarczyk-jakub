import { SvgModel } from '../model/svg.model';

export class SvgBuilder {
  static build(
    paths: SvgModel['paths'],
    args: SvgModel['args'] = {
      scale: 1,
      strokeWidth: 0,
      fill: true,
      transform: {
        left: 0,
        top: 0,
      },
    },
  ): SvgModel {
    return { paths, args };
  }
}
