import { BaseDomain } from '../model/base-domain.model';
import { ResumeDomain } from '../model/resume-domain.model';

export const resumeDomainConst: BaseDomain.Model<ResumeDomain.Data, ResumeDomain.Metadata> = {
  data: {
    resumeEng: 'asset/document/resume/jakub_olejarczyk_eng.pdf',
    resumePl: 'asset/document/resume/jakub_olejarczyk_pl.pdf',
  },
  metadata: {},
};
