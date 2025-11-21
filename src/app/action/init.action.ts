import { AppearanceStateModel } from '../model/state/appearance-state.model';
import { DataStateModel } from '../model/state/data-state.model';
import { DomainStateModel } from '../model/state/domain-state.model';
import { LayoutStateModel } from '../model/state/layout-state.model';
import { MapperStateModel } from '../model/state/mapper-state.model';
import { MetadataStateModel } from '../model/state/metadata-state.model';
import { RawStateModel } from '../model/state/raw-state.model';

export class RawInitAction {
  static readonly type = '[Raw] Init';

  constructor(public state: RawStateModel) {}
}

export class MapperInitAction {
  static readonly type = '[Mapper] Init';

  constructor(public state: MapperStateModel) {}
}

export class DataInitAction {
  static readonly type = '[Data] Init';

  constructor(public state: DataStateModel) {}
}

export class MetadataInitAction {
  static readonly type = '[Metadata] Init';

  constructor(public state: MetadataStateModel) {}
}

export class AppearanceInitAction {
  static readonly type = '[Appearance] Init';

  constructor(public state: AppearanceStateModel) {}
}

export class DomainInitAction {
  static readonly type = '[Domain] Init';

  constructor(public state: DomainStateModel) {}
}

export class LayoutInitAction {
  static readonly type = '[Layout] Init';

  constructor(public state: LayoutStateModel) {}
}
