import { Injectable } from '@angular/core';
import { of, switchMap, take } from 'rxjs';

import { RawInitiator } from '../raw/initiator/raw.initiator';
import { MapperInitiator } from '../mapper/initiator/mapper.initiator';

@Injectable({ providedIn: 'root' })
export class Initiator {
  constructor(
    private readonly raw: RawInitiator,
    private readonly mapper: MapperInitiator,
  ) {}

  init() {
    of(true)
      .pipe(
        switchMap(() => this.raw.init()),
        switchMap(() => this.mapper.init()),
        take(1),
      )
      .subscribe();
  }
}
