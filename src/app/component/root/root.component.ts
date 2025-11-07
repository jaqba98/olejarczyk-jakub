import { Component } from '@angular/core';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'root-component',
  templateUrl: './root.component.html',
  imports: [SectionComponent],
})
export class RootComponent {}
