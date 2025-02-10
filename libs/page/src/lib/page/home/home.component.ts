import { Component } from '@angular/core';

import {
  NavViewComponent,
  SkillsViewComponent,
} from '@olejarczyk-jakub/component';
import { AboutMeViewComponent } from "../../../../../component/src/lib/view/about-me-view/about-me-view.component";

@Component({
  selector: 'lib-home',
  imports: [NavViewComponent, SkillsViewComponent, AboutMeViewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
