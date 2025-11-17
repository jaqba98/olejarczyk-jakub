import { AppearanceStateModel } from '../model/state/appearance-state.model';
import { DataStateModel } from '../model/state/data-state.model';
import { DomainStateModel } from '../model/state/domain-state.model';
import { MapperStateModel } from '../model/state/mapper-state.model';
import { MetadataStateModel } from '../model/state/metadata-state.model';
import { RawStateModel } from '../model/state/raw-state.model';

export class RawStateInitAction {
  static readonly type = '[Raw] Init';

  constructor(public state: RawStateModel) {}
}

export class MapperStateInitAction {
  static readonly type = '[Mapper] Init';

  constructor(public state: MapperStateModel) {}
}

export class DataStateInitAction {
  static readonly type = '[Data] Init';

  constructor(public state: DataStateModel) {}
}

export class MetadataStateInitAction {
  static readonly type = '[Metadata] Init';

  constructor(public state: MetadataStateModel) {}
}

export class AppearanceStateInitAction {
  static readonly type = '[Appearance] Init';

  constructor(public state: AppearanceStateModel) {}
}

export class DomainStateInitAction {
  static readonly type = '[Domain] Init';

  constructor(public state: DomainStateModel) {}
}
