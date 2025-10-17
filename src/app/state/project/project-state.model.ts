import { AssetImageDomainEnum } from '../../domain/enum/asset-image-domain.enum';
import { ProjectDomainEnum } from '../../domain/enum/project-domain.enum';
import { StatusDomainEnum } from '../../domain/enum/status-domain.enum';
import { TechnologyDomainEnum } from '../../domain/enum/technology-domain.enum';

interface ProjectModel {
  name: string;
  createDate: Date;
  status: StatusDomainEnum;
  banner: AssetImageDomainEnum;
  description: string;
  technologies: TechnologyDomainEnum[];
  link: string;
  order: number;
}

export type ProjectStateModel = Record<ProjectDomainEnum, ProjectModel>;
