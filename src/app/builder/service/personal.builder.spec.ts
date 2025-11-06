import { personalDomainConst } from '../../domain/const/personal-domain.const';
import { PersonalBuilderModel } from '../model/builder/personal-builder.model';
import { PersonalBuilder } from './personal.builder';

describe('Personal Builder', () => {
  it('Should return the correct data', () => {
    const result: PersonalBuilderModel = {
      ...personalDomainConst,
      extend: {
        initials: 'J.O.',
      },
    };
    expect(PersonalBuilder.buildData()).toEqual(result);
  });
});
