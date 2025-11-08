import { SectionDomainBuilder } from '../../domain/builder/section-domain.builder';
import { SectionLayoutModel } from '../model/section-layout.model';

export class SectionLayoutBuilder {
  static build(): SectionLayoutModel {
    const sectionDomain = SectionDomainBuilder.build();
    const sections = Object.values(sectionDomain).sort(
      (prev, next) => prev.metadata.order - next.metadata.order,
    );
    return { sections };
  }
}
