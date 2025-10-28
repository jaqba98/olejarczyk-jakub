import { technologyCategoryDomainConst } from '../../domain/const/technology-category-domain.const';
import { technologyDomainConst } from '../../domain/const/technology-domain.const';
import { TechnologyDataBuilderModel } from '../model/data/technology-data-builder.model';

export class TechnologyDataBuilder {
  static buildData(): TechnologyDataBuilderModel {
    return Object.values(technologyCategoryDomainConst)
      .sort((prev, next) => prev.metadata.order - next.metadata.order)
      .map((category) => ({
        category: category.data,
        technologies: Object.values(technologyDomainConst)
          .filter((technology) => technology.metadata.categoryKind === category.metadata.kind)
          .sort((prev, next) => prev.metadata.order - next.metadata.order)
          .map((technology) => technology.data),
      }));
  }
}
