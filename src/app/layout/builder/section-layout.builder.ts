import { SectionDomainBuilder } from '../../domain/builder/section-domain.builder';
import { SectionLayoutModel } from '../model/section-layout.model';

export class SectionLayoutBuilder {
  static build(): SectionLayoutModel {
    const domain = SectionDomainBuilder.build();
    const sections = Object.values(domain)
      .sort((domainLeft, domainRight) => domainLeft.metadata.order - domainRight.metadata.order)
      .map((domain) => domain.data);
    return { sections };
  }
}
