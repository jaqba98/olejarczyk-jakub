import { ImageAssetDomainType } from '../../type/asset/image-asset-domain.type';
import { StatusEntityDomainType } from '../../type/entity/status-entity-domain.type';
import { ProjectIdDomainType } from '../../type/id/project-id-domain.type';
import { TechnologyIdDomainType } from '../../type/id/technology-id-domain.type';
import { ProjectNameDomainType } from '../../type/name/project-name-domain.type';
import { BaseStateDomainModel } from '../base/base-state-domain.model';

export interface ProjectStateDomainModel extends BaseStateDomainModel<ProjectIdDomainType> {
  banner: ImageAssetDomainType;
  name: ProjectNameDomainType;
  creationDate: Date;
  status: StatusEntityDomainType;
  description: string;
  technologyIds: TechnologyIdDomainType[];
  repositoryUrl: string;
  applicationUrl: string;
  gallery: ImageAssetDomainType[];
}
