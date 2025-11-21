import { ParagraphDomainModel } from '../domain/paragraph-domain.model';
import { SectionDomainModel } from '../domain/section-domain.model';

export interface DomainStateModel {
  copyright: ParagraphDomainModel;
  description: ParagraphDomainModel;
  section: SectionDomainModel;
}
