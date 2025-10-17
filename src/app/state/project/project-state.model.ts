import { AssetImageDomainEnum } from '../../domain/enum/asset-image-domain.enum';
import { ProjectDomainEnum } from '../../domain/enum/project-domain.enum';
import { RepositoryKindDomainEnum } from '../../domain/enum/repository-kind-domain.enum';
import { StatusDomainEnum } from '../../domain/enum/status-domain.enum';
import { TechnologyDomainEnum } from '../../domain/enum/technology-domain.enum';

interface ProjectRepositoryNoneModel {
  kind: RepositoryKindDomainEnum.none;
}

interface ProjectRepositoryGitHubModel {
  kind: RepositoryKindDomainEnum.github;
  link: string;
  fetch: boolean;
}

type ProjectRepositoryType = ProjectRepositoryNoneModel | ProjectRepositoryGitHubModel;

interface ProjectModel {
  banner: AssetImageDomainEnum;
  name: string;
  creationDate: Date;
  status: StatusDomainEnum;
  description: string;
  technologies: TechnologyDomainEnum[];
  repository: ProjectRepositoryType;
  gallery: AssetImageDomainEnum[];
  appLink: string;
}

export type ProjectStateModel = Record<ProjectDomainEnum, ProjectModel>;
