import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavSmartComponent } from '@olejarczyk-jakub/component';

@Component({
  selector: 'lib-home',
  imports: [CommonModule, NavSmartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
