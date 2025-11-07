import { BaseCompose } from '../../data/model/base/base-combo-data.model';
import { ResumeDomain } from '../model/domain/resume-domain.model';

export const resumeDomainConst: BaseCompose.Model<ResumeDomain.Data, ResumeDomain.Metadata> = {
  data: {
    resumeEng: 'asset/document/resume/jakub_olejarczyk_eng.pdf',
    resumePl: 'asset/document/resume/jakub_olejarczyk_pl.pdf',
  },
  metadata: {
    test: 'test',
  },
};
