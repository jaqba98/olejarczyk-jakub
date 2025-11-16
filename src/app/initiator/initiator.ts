import { Injectable } from '@angular/core';
import { of, switchMap, take } from 'rxjs';

import { RawInitiator } from '../raw/initiator/raw.initiator';
import { MapperInitiator } from '../mapper/initiator/mapper.initiator';
import { DataInitiator } from '../data/initiator/data.initiator';
import { MetadataInitiator } from '../metadata/initiator/metadata.initiator';

@Injectable({ providedIn: 'root' })
export class Initiator {
  constructor(
    private readonly raw: RawInitiator,
    private readonly mapper: MapperInitiator,
    private readonly data: DataInitiator,
    private readonly metadata: MetadataInitiator,
  ) {}

  init() {
    of(true)
      .pipe(
        switchMap(() => this.raw.init()),
        switchMap(() => this.mapper.init()),
        switchMap(() => this.data.init()),
        switchMap(() => this.metadata.init()),
        take(1),
      )
      .subscribe();
  }
}
