import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceViewComponent } from './component/view/experience/experience-view.component';
import { TechnologyViewComponent } from './component/view/technology/technology-view.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ExperienceViewComponent, TechnologyViewComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
