import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceView } from './view/experience/experience.view';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ExperienceView],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
