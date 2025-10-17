import { AssetImageDomainType } from '../../domain/type/asset-image-domain.type';
import { ProjectDomainType } from '../../domain/type/project-domain.type';
import { RepositoryKindDomainType } from '../../domain/type/repository-kind-domain.type';
import { StatusDomainType } from '../../domain/type/status-domain.type';
import { TechnologyDomainType } from '../../domain/type/technology-domain.type';

interface ProjectRepositoryKindModel<TKind extends RepositoryKindDomainType> {
  kind: TKind;
}

interface ProjectRepositoryNoneModel extends ProjectRepositoryKindModel<'none'> {}

interface ProjectRepositoryGitHubModel extends ProjectRepositoryKindModel<'github'> {
  repoUrl: string;
}

type ProjectRepositoryType = ProjectRepositoryNoneModel | ProjectRepositoryGitHubModel;

interface ProjectModel {
  banner: AssetImageDomainType;
  name: string;
  creationDate: Date;
  status: StatusDomainType;
  description: string;
  technologies: TechnologyDomainType[];
  repository: ProjectRepositoryType;
  gallery: AssetImageDomainType[];
  appUrl: string;
}

export type ProjectStateModel = Record<ProjectDomainType, ProjectModel>;
