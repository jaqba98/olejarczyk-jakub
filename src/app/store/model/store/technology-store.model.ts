import { TechnologyDataBuilderModel } from '../../../builder/model/data/technology-data-builder.model';
import { BaseStoreModel } from '../base/base-store.model';

export interface TechnologyStoreModel extends BaseStoreModel {
  technologyData: TechnologyDataBuilderModel;
}
