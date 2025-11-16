import { RawStateModel } from '../model/state/raw-state.model';

export class RawStateInitAction {
  static readonly type = '[Raw] Init';

  constructor(public state: RawStateModel) {}
}
