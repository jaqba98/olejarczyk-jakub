import { Injectable } from '@angular/core';
import { of, switchMap, take } from 'rxjs';

import { AppearanceInitiator } from '../data/appearance/initiator/appearance.initiator';
import { DataInitiator } from '../data/data/initiator/data.initiator';
import { DomainInitiator } from '../data/domain/initiator/domain.initiator';
import { LayoutInitiator } from '../data/layout/initiator/layout.initiator';
import { MapperInitiator } from '../data/mapper/initiator/mapper.initiator';
import { MetadataInitiator } from '../data/metadata/initiator/metadata.initiator';
import { RawInitiator } from '../data/raw/initiator/raw.initiator';

@Injectable({ providedIn: 'root' })
export class Initiator {
  constructor(
    private readonly raw: RawInitiator,
    private readonly mapper: MapperInitiator,
    private readonly data: DataInitiator,
    private readonly metadata: MetadataInitiator,
    private readonly appearance: AppearanceInitiator,
    private readonly domain: DomainInitiator,
    private readonly layout: LayoutInitiator,
  ) {}

  init() {
    return of(true).pipe(
      switchMap(() => this.raw.init()),
      switchMap(() => this.mapper.init()),
      switchMap(() => this.data.init()),
      switchMap(() => this.metadata.init()),
      switchMap(() => this.appearance.init()),
      switchMap(() => this.domain.init()),
      switchMap(() => this.layout.init()),
      take(1),
    );
  }
}
