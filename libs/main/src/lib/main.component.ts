import { Component } from '@angular/core';

import { PageComponent } from '@olejarczyk-jakub/page';

@Component({
  selector: 'lib-main',
  imports: [PageComponent],
  template: '<lib-page></lib-page>',
})
export class MainComponent {}
