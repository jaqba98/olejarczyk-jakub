import { Injectable } from '@angular/core';
import { of, switchMap, take } from 'rxjs';

import { RawInitiator } from '../raw/initiator/raw.initiator';
import { MapperInitiator } from '../mapper/initiator/mapper.initiator';
import { DataInitiator } from '../data/initiator/data.initiator';
import { MetadataInitiator } from '../metadata/initiator/metadata.initiator';
import { AppearanceInitiator } from '../appearance/initiator/appearance.initiator';
import { DomainInitiator } from '../domain/initiator/domain.initiator';
import { LayoutInitiator } from '../layout/initiator/layout.initiator';

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
