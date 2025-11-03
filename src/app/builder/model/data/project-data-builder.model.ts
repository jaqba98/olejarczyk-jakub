import { ProjectDomain } from '../../../domain/model/project-domain.model';
import { TechnologyDomain } from '../../../domain/model/technology-domain.model';

interface ProjectDataModel {
  project: ProjectDomain.Data;
  technologies: TechnologyDomain.Data[];
}

export type ProjectDataBuilderModel = ProjectDataModel[];
