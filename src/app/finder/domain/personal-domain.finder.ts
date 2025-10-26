import { personalDomainConst } from '../../domain/const/personal-domain.const';
import { PersonalDataModel } from '../model/data/personal-data.model';

export class PersonalDomainFinder {
  static findData(): PersonalDataModel {
    const { data } = personalDomainConst;
    const firstNameFirstLetter = data.firstName.at(0);
    const lastNameFirstLetter = data.lastName.at(0);
    if (!firstNameFirstLetter) {
      throw new Error('First name can not be empty!');
    }
    if (!lastNameFirstLetter) {
      throw new Error('Last name can not be empty!');
    }
    const firstNameFirstLetterUpperCase = firstNameFirstLetter.toUpperCase();
    const lastNameFirstLetterUpperCase = lastNameFirstLetter.toUpperCase();
    const initials = `${firstNameFirstLetterUpperCase}.${lastNameFirstLetterUpperCase}.`;
    return { ...data, initials };
  }
}
