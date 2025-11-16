import { Injectable } from '@angular/core';
import { take } from 'rxjs';

import { RawInit } from '../raw/init/raw.init';

@Injectable({ providedIn: 'root' })
export class Initiator {
  constructor(private readonly rawInit: RawInit) {}

  init() {
    this.rawInit.init().pipe(take(1)).subscribe();
  }
}
