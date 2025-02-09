import { MenuModel } from '@olejarczyk-jakub/model';

export class MenuSetIsOpenAction {
  static readonly type = '[Menu] Set Is Open';

  constructor(public payload: MenuModel['isOpen']) {}
}
