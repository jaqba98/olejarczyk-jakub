import { projectDomainConst } from '../../domain/const/project-domain.const';
import { technologyDomainConst } from '../../domain/const/technology-domain.const';
import { ProjectDataBuilderModel } from '../model/data/project-data-builder.model';

export class ProjectDataBuilder {
  static buildData(): ProjectDataBuilderModel {
    return Object.values(projectDomainConst)
      .sort((prev, next) => prev.metadata.order - next.metadata.order)
      .map((project) => ({
        project: project.data,
        technologies: Object.values(technologyDomainConst)
          .filter((technology) => project.metadata.technologyIds.includes(technology.metadata.kind))
          .sort((prev, next) => prev.metadata.order - next.metadata.order)
          .map((technology) => technology.data),
      }));
  }
}
