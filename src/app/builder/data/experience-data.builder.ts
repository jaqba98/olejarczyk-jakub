import { companyDomainConst } from '../../domain/const/company-domain.const';
import { experienceDomainConst } from '../../domain/const/experience-domain.const';
import { technologyDomainConst } from '../../domain/const/technology-domain.const';
import { ExperienceDataBuilderModel } from '../model/data/experience-data-builder.model';

export class ExperienceDataBuilder {
  static buildData(): ExperienceDataBuilderModel {
    return Object.values(experienceDomainConst)
      .sort((prev, next) => prev.metadata.order - next.metadata.order)
      .map((domain) => ({
        companyKind: domain.metadata.companyKind,
        experiences: domain.data.experiences,
      }))
      .map((domain) => {
        return domain.experiences.map((experience) => ({
          companyKind: domain.companyKind,
          experience,
        }));
      })
      .flat()
      .sort((prev, next) => prev.experience.order - next.experience.order)
      .sort((prev, next) => {
        return next.experience.startDate.getTime() - prev.experience.startDate.getTime();
      })
      .map((domain) => ({
        experience: domain.experience,
        technologies: Object.values(technologyDomainConst)
          .filter((technology) => {
            return domain.experience.technologyIds.includes(technology.metadata.kind);
          })
          .map((technology) => technology.data),
        company: companyDomainConst[domain.companyKind].data,
      }));
  }
}
