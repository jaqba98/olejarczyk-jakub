import { Component } from '@angular/core';

import { TechnologyViewComponent } from '../view/technology/technology-view.component';
import { ExperienceViewComponent } from '../view/experience/experience-view.component';
import { FooterViewComponent } from '../view/footer/footer-view.component';

@Component({
  selector: 'root',
  templateUrl: './root.component.html',
  imports: [TechnologyViewComponent, ExperienceViewComponent, FooterViewComponent],
})
export class RootComponent {}
