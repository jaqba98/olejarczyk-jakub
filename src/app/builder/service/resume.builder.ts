import { resumeDomainConst } from '../../domain/const/resume-domain.const';
import { ResumeBuilderModel } from '../model/builder/resume-builder.model';

export class ResumeBuilder {
  static buildData(): ResumeBuilderModel {
    return { ...resumeDomainConst, extend: {} };
  }
}
