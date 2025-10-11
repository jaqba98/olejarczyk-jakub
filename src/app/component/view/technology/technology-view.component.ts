import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TechnologyBuilder } from '../../../builder/technology.builder';
import { RootColorType } from '../../../type/color.type';

@Component({
  selector: 'technology-view',
  templateUrl: './technology-view.component.html',
  styleUrl: './technology-view.component.scss',
  imports: [CommonModule],
  providers: [TechnologyBuilder],
})
export class TechnologyViewComponent {
  // technology$;

  rootColor: RootColorType = 'dominant';

  constructor(private readonly builder: TechnologyBuilder) {
    this.builder.build().subscribe((i) => console.log(i));
  }
}
