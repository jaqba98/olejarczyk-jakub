import { RawStoreModel } from '../../model/state/raw-state.model';

export class InitRawStoreAction {
  static readonly type = '[Raw] Init';

  constructor(public model: RawStoreModel) {}
}

export class InitMapperStoreAction {
  static readonly type = '[Mapper] Init';
}

export class InitDataStoreAction {
  static readonly type = '[Data] Init';
}

export class InitMetadataStoreAction {
  static readonly type = '[Metadata] Init';
}

export class InitAppearanceStoreAction {
  static readonly type = '[Appearance] Init';
}

export class InitDomainStoreAction {
  static readonly type = '[Domain] Init';
}

export class InitLayoutStoreAction {
  static readonly type = '[Layout] Init';
}
