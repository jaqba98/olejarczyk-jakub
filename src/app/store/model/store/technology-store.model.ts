import { TechnologyBuilderModel } from '../../../builder/model/builder/technology-builder.model';
import { BaseStoreModel } from '../base/base-store.model';

export interface TechnologyStoreModel extends BaseStoreModel {
  technology: TechnologyBuilderModel;
}
