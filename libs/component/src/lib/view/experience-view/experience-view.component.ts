import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseViewComponent } from '../base-view/base-view.component';
import { StyleOffDirective } from '../../base/style-off.directive';
import { TitleViewComponent } from '../title-view/title-view.component';
import { ExperienceItemDumbComponent } from '../../dumb/experience-item-dumb/experience-item-dumb.component';

@Component({
  selector: 'lib-experience-view',
  imports: [
    CommonModule,
    BaseViewComponent,
    TitleViewComponent,
    ExperienceItemDumbComponent,
  ],
  templateUrl: './experience-view.component.html',
  styleUrl: './experience-view.component.scss',
  hostDirectives: [StyleOffDirective],
})
export class ExperienceViewComponent {
  tasks = [
    'Creating and styling user interfaces in Angular',
    'Building dynamically generated reusable components in the Storybook environment',
    'Managing application state using NGXS with the Redux DevTools plugin',
    'Creating internal NPM packages to automate work in a monorepo environment, improving collaboration with GIT and integrating automated tests',
    'Implementing client-server communication using REST API',
    'Executing queries to relational databases using SQL',
  ];
}
