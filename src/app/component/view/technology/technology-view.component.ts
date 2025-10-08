import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyBuilder } from '../../../builder/technology.builder';
import { SectionDumbComponent } from '../../dumb/section/section-dumb.component';
import { FlexDumbComponent } from '../../dumb/flex/flex-dumb.component';
import { FlexItemDumbComponent } from '../../dumb/flex-item/flex-item-dumb.component';
import { HeaderDumbComponent } from '../../dumb/header/header-dumb.component';

@Component({
  selector: 'technology-view',
  templateUrl: './technology-view.component.html',
  styleUrl: './technology-view.component.scss',
  imports: [
    CommonModule,
    SectionDumbComponent,
    FlexDumbComponent,
    FlexItemDumbComponent,
    HeaderDumbComponent,
  ],
  providers: [TechnologyBuilder],
})
export class TechnologyViewComponent {
  technology$;

  constructor(private readonly builder: TechnologyBuilder) {
    this.technology$ = this.builder.build();
  }
}
