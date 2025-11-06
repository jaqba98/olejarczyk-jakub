import { ProjectDomain } from '../../../domain/model/domain/project-domain.model';
import { TechnologyDomain } from '../../../domain/model/domain/technology-domain.model';

interface ProjectDataModel {
  project: ProjectDomain.Data;
  technologies: TechnologyDomain.Data[];
}

export type ProjectDataBuilderModel = ProjectDataModel[];
