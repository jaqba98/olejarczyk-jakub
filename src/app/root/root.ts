import { Component } from '@angular/core';

import { Initiator } from '../initiator/initiator';

@Component({
  selector: 'root',
  templateUrl: './root.html',
})
export class Root {
  constructor(private readonly initiator: Initiator) {
    this.initiator.init();
  }
}
