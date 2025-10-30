import { resumeDomainConst } from '../../domain/const/resume-domain.const';
import { ResumeDataBuilderModel } from '../model/data/resume-data-builder.model';
import { ResumeDataBuilder } from './resume-data.builder';

describe('Resume Data Builder', () => {
  it('Should return the correct data', () => {
    const correctData: ResumeDataBuilderModel = resumeDomainConst.data;
    expect(ResumeDataBuilder.buildData()).toEqual(correctData);
  });
});
