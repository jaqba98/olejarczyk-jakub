import { SectionDataStateModel } from '../../state/data/section-data-state-domain.model';
import { AboutMeSectionStateDomainModel } from '../../state/section/about-me-section-state-domain.model';

export interface AboutMeSectionViewDomainModel extends AboutMeSectionStateDomainModel {
  sectionData: SectionDataStateModel;
}
