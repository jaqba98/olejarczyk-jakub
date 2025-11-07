import { ImageAssetDomainType } from '../../type/asset/image-asset-domain.type';
import { StatusEntityDomainType } from '../../type/entity/status-entity-domain.type';
import { ProjectKindDomainType } from '../../type/kind/project-kind-domain.type';
import { TechnologyKindDomainType } from '../../type/kind/technology-kind-domain.type';
import { ProjectNameDomainType } from '../../type/name/project-name-domain.type';
import { BaseDomain } from '../../../data/model/base/base-data.model';

export namespace ProjectDomain {
  interface RepositoryNoneModel {
    type: 'none';
  }

  interface RepositoryGitHubModel {
    type: 'github';
    url: string;
  }

  type RepositoryModel = RepositoryNoneModel | RepositoryGitHubModel;

  interface ApplicationNoneModel {
    type: 'none';
  }

  interface ApplicationGitHubPageModel {
    type: 'githubPage';
    url: string;
  }

  type ApplicationModel = ApplicationNoneModel | ApplicationGitHubPageModel;

  export interface Data extends BaseDomain.Data {
    banner: ImageAssetDomainType;
    name: ProjectNameDomainType;
    creationDate: Date;
    status: StatusEntityDomainType;
    description: string;
    repository: RepositoryModel;
    application: ApplicationModel;
    gallery: ImageAssetDomainType[];
  }

  export interface Metadata extends BaseDomain.Metadata {
    kind: ProjectKindDomainType;
    technologyIds: TechnologyKindDomainType[];
    order: number;
  }
}
