import { resumeDomainConst } from '../../domain/const/resume-domain.const';
import { ResumeDataBuilderModel } from '../model/data/resume-data-builder.model';

export class ResumeDataBuilder {
  static buildData(): ResumeDataBuilderModel {
    return resumeDomainConst.data;
  }
}
