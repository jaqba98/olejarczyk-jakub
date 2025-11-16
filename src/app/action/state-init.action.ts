import { MapperStateModel } from '../model/state/mapper-state.model';
import { RawStateModel } from '../model/state/raw-state.model';

export class RawStateInitAction {
  static readonly type = '[Raw] Init';

  constructor(public state: RawStateModel) {}
}

export class MapperStateInitAction {
  static readonly type = '[Mapper] Init';

  constructor(public state: MapperStateModel) {}
}
