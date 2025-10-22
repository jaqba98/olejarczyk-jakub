import { PersonalDataStateDomainModel } from '../../state/data/personal-data-state-domain.model';
import { NavSectionStateDomainModel } from '../../state/section/nav-section-state-domain.model';

export interface NavSectionViewDomainModel {
  navSection: NavSectionStateDomainModel;
  personalData: PersonalDataStateDomainModel;
}
