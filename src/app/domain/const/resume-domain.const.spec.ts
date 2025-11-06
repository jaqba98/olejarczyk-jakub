import { BaseCompose } from '../model/base/base-compose.model';
import { ResumeDomain } from '../model/domain/resume-domain.model';
import { resumeDomainConst } from './resume-domain.const';

describe('Resume Domain Const', () => {
  it('Should return the correct data', () => {
    const correctData: BaseCompose.Model<ResumeDomain.Data, ResumeDomain.Metadata> = {
      data: {
        resumeEng: 'asset/document/resume/jakub_olejarczyk_eng.pdf',
        resumePl: 'asset/document/resume/jakub_olejarczyk_pl.pdf',
      },
      metadata: {
        test: 'test',
      },
    };
    expect(resumeDomainConst).toEqual(correctData);
  });
});
