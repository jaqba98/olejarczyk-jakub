import { personalDomainConst } from '../../domain/const/personal-domain.const';
import { PersonalDataBuilderModel } from '../model/data/personal-data-builder.model';
import { PersonalDataBuilder } from './personal-data.builder';

describe('Personal Data Builder', () => {
  it('Should return the correct data', () => {
    const correctData: PersonalDataBuilderModel = {
      ...personalDomainConst.data,
      initials: 'J.O.',
    };
    expect(PersonalDataBuilder.buildData()).toEqual(correctData);
  });
});
