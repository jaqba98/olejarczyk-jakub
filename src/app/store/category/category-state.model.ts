import { CategoryType } from './category.type';

interface CategoryModel {
  label: string;
}

export type CategoryStateModel = Record<CategoryType, CategoryModel>;
