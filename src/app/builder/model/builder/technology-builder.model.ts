import { TechnologyCategoryDomain } from '../../../domain/model/domain/technology-category-domain.model';
import { TechnologyDomain } from '../../../domain/model/domain/technology-domain.model';
import { BaseBuilderArrayModel } from '../base/base-builder.model';

export type TechnologyBuilderModel = BaseBuilderArrayModel<
  TechnologyCategoryDomain.Data,
  TechnologyCategoryDomain.Metadata,
  {
    technologies: BaseBuilderArrayModel<TechnologyDomain.Data, TechnologyDomain.Metadata>;
  }
>;
