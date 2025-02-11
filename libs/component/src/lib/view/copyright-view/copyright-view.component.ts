import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseComponent, BaseViewComponent } from '@olejarczyk-jakub/component';

@Component({
  selector: 'lib-copyright-view',
  imports: [CommonModule, BaseViewComponent],
  templateUrl: './copyright-view.component.html',
  styleUrl: './copyright-view.component.scss',
})
export class CopyrightViewComponent extends BaseComponent {}
