import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectBuilder } from '../../../old/builder/project-domain.builder';

@Component({
  selector: 'project-view',
  templateUrl: './project-view.component.html',
  imports: [CommonModule],
  providers: [ProjectBuilder],
})
export class ProjectViewComponent {
  constructor(private readonly builder: ProjectBuilder) {
    this.builder.build().subscribe((state) => console.log(state));
  }
}
