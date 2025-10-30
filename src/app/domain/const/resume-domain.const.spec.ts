import { BaseDomain } from '../model/base-domain.model';
import { ResumeDomain } from '../model/resume-domain.model';
import { resumeDomainConst } from './resume-domain.const';

describe('Resume Domain Const', () => {
  it('Should return the correct data', () => {
    const correctData: BaseDomain.Model<ResumeDomain.Data, ResumeDomain.Metadata> = {
      data: {
        resumeEng: 'asset/document/resume/jakub_olejarczyk_eng.pdf',
        resumePl: 'asset/document/resume/jakub_olejarczyk_pl.pdf',
      },
      metadata: {},
    };
    expect(resumeDomainConst).toEqual(correctData);
  });
});
