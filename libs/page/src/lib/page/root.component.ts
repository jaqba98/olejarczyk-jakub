import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SystemSmartComponent } from '@olejarczyk-jakub/component';

@Component({
  selector: 'lib-root',
  imports: [SystemSmartComponent, RouterModule],
  templateUrl: './root.component.html',
})
export class RootComponent {}
