import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { of } from 'rxjs';

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
      map(() => this.raw.init()),
      map(() => this.mapper.init()),
      map(() => this.data.init()),
      map(() => this.metadata.init()),
      map(() => this.appearance.init()),
      map(() => this.domain.init()),
      map(() => this.layout.init()),
      take(1),
    );
  }
}
