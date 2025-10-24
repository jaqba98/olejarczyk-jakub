import { PersonalDataStateDomainModel } from '../../../../../model/personal-data.model';
import { SectionDataStateModel } from '../../../../../model/section-data.model';
import { NavSectionStateOptionDomainModel } from '../../state/section/nav-section-state-domain.model';

export interface NavSectionViewOptionDomainModel extends NavSectionStateOptionDomainModel {
  sectionData: SectionDataStateModel;
}

export interface NavSectionViewDomainModel {
  sectionData: SectionDataStateModel;
  personalData: PersonalDataStateDomainModel;
  options: NavSectionViewOptionDomainModel[];
}
