import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseViewComponent } from '../base-view/base-view.component';

@Component({
  selector: 'lib-projects-view',
  imports: [CommonModule, BaseViewComponent],
  templateUrl: './projects-view.component.html',
  styleUrl: './projects-view.component.scss',
})
export class ProjectsViewComponent {}
