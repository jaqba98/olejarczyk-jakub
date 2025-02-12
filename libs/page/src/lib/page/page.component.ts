import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SystemSmartComponent } from '@olejarczyk-jakub/component';

@Component({
  selector: 'lib-page',
  imports: [SystemSmartComponent, RouterModule],
  templateUrl: './page.component.html',
})
export class PageComponent {}
