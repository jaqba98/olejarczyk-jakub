import { ParagraphDomainModel } from '../domain/domain/paragraph-domain.model';
import { SectionDomainModel } from '../domain/domain/section-domain.model';

export interface DomainStateModel {
  copyright: ParagraphDomainModel;
  section: SectionDomainModel;
}
