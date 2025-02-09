import { SystemModel } from '@olejarczyk-jakub/model';

export class SystemSetSectionAction {
  static readonly type = '[System] Set Section';

  constructor(public payload: SystemModel['section']) {}
}
