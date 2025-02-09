import { MenuModel } from '@olejarczyk-jakub/model';

export class MenuSetTitleAction {
  static readonly type = '[Menu] Set Title';

  constructor(public payload: MenuModel['title']) {}
}
