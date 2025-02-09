import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MediaSmartComponent } from '@olejarczyk-jakub/component';

@Component({
  selector: 'lib-root',
  imports: [MediaSmartComponent, RouterModule],
  templateUrl: './root.component.html',
})
export class RootComponent {}
