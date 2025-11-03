import { ProjectDataBuilderModel } from '../../../builder/model/data/project-data-builder.model';
import { BaseStoreModel } from '../base/base-store.model';

export interface ProjectStoreModel extends BaseStoreModel {
  projectData: ProjectDataBuilderModel;
}
