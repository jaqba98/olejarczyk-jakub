import { SvgModel } from '../model/svg.model';

export class SvgBuilder {
  static build(paths: SvgModel['paths']): SvgModel {
    return { paths };
  }
}
