import { Component } from '@angular/core';

import { TechnologyViewComponent } from '../view/technology/technology-view.component';
import { ExperienceViewComponent } from '../view/experience/experience-view.component';
import { NavViewComponent } from '../view/nav/nav-view.component';

@Component({
  selector: 'root',
  templateUrl: './root.component.html',
  imports: [TechnologyViewComponent, ExperienceViewComponent, NavViewComponent],
})
export class RootComponent {}
