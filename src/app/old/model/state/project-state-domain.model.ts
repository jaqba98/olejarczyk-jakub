import { ImageAssetDomainType } from '../../../domain/type/asset/image-asset-domain.type';
import { StatusEntityDomainType } from '../../type/entity/status-entity-domain.type';
import { ProjectIdDomainType } from '../../type/id/project-id-domain.type';
import { TechnologyGroupIdDomainType } from '../../../data/type/id/technology-group-id-data.type';
import { TechnologyIdDomainType } from '../../../data/type/id/technology-id-data.type';
import { ProjectNameDomainType } from '../../type/name/project-name-domain.type';
import { BaseStateDomainModel } from '../base/base-state-domain.model';

interface ProjectRepositoryNoneStateModel {
  type: 'none';
}

interface ProjectRepositoryGitHubStateModel {
  type: 'github';
  url: string;
}

type ProjectRepositoryModel = ProjectRepositoryNoneStateModel | ProjectRepositoryGitHubStateModel;

interface ProjectApplicationNoneStateModel {
  type: 'none';
}

interface ProjectApplicationGitHubPageStateModel {
  type: 'githubPage';
  url: string;
}

type ProjectApplicationModel =
  | ProjectApplicationNoneStateModel
  | ProjectApplicationGitHubPageStateModel;

export interface ProjectStateModel extends BaseStateDomainModel<ProjectIdDomainType> {
  banner: ImageAssetDomainType;
  name: ProjectNameDomainType;
  creationDate: Date;
  status: StatusEntityDomainType;
  description: string;
  technologies: {
    groupIds: TechnologyGroupIdDomainType[];
    technologyId: TechnologyIdDomainType;
  }[];
  repository: ProjectRepositoryModel;
  application: ProjectApplicationModel;
  gallery: ImageAssetDomainType[];
}

export type ProjectStateDomainModel = Record<ProjectIdDomainType, ProjectStateModel>;
