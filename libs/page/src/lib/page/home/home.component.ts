import { Component } from '@angular/core';

import {
  NavViewComponent,
  SkillsViewComponent,
} from '@olejarczyk-jakub/component';
import { AboutMeViewComponent } from "../../../../../component/src/lib/view/about-me-view/about-me-view.component";
import { EducationViewComponent } from "../../../../../component/src/lib/view/education-view/education-view.component";

@Component({
  selector: 'lib-home',
  imports: [NavViewComponent, SkillsViewComponent, AboutMeViewComponent, EducationViewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
