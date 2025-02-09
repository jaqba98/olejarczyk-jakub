import { SystemModel } from '@olejarczyk-jakub/model';

export class SystemSetMediaAction {
  static readonly type = '[System] Set Media';

  constructor(public payload: SystemModel['media']) {}
}
