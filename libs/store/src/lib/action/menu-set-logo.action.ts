import { MenuModel } from '@olejarczyk-jakub/model';

export class MenuSetLogoAction {
  static readonly type = '[Menu] Set Logo';

  constructor(public payload: MenuModel['logo']) {}
}
