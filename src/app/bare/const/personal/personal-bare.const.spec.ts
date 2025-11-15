import { PersonalBareModel } from '../../model/personal-bare.model';
import { personalBareConst } from './personal-bare.const';

describe('Personal Bare Const', () => {
  it('Should return the correct data', () => {
    const correctData: PersonalBareModel = {
      firstName: 'Jakub',
      lastName: 'Olejarczyk',
    };
    expect(personalBareConst).toEqual(correctData);
  });
});
