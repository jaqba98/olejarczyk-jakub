import { CategoryKindEnum } from '../../enum/kind/category-kind.enum';

interface CategoryModel {
  label: string;
  order: number;
}

export type CategoryStateModel = Record<CategoryKindEnum, CategoryModel>;
