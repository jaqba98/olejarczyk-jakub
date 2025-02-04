import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from '@olejarczyk-jakub/component';

@Component({
  selector: 'lib-home',
  imports: [CommonModule, NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
