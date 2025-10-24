import { PersonalDataStateDomainModel } from '../../state/data/personal-data-state-domain.model';
import { SectionDataStateModel } from '../../state/data/section-data-state-domain.model';
import { NavSectionStateOptionDomainModel } from '../../state/section/nav-section-state-domain.model';

export interface NavSectionViewOptionDomainModel extends NavSectionStateOptionDomainModel {
  sectionData: SectionDataStateModel;
}

export interface NavSectionViewDomainModel {
  sectionData: SectionDataStateModel;
  personalData: PersonalDataStateDomainModel;
  options: NavSectionViewOptionDomainModel[];
}
