import { RawStateModel } from '../model/state/raw-state.model';

export class RawStoreInitAction {
  static readonly type = '[Raw] Init';

  constructor(public state: RawStateModel) {}
}
