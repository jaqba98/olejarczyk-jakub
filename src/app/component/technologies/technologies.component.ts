import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { ComponentDecorator } from '../../decorator/component.decorator';
import { LayoutModel } from '../../model/layout/layout.model';
import { TechnologiesAppearanceModel } from '../../model/appearance/technologies-appearance.model';
import { TechnologiesDataModel } from '../../model/data/technologies-data.model';
import { TechnologiesMetadataModel } from '../../model/metadata/technologies-metadata.model';

@Component({
  selector: 'technologies-component',
  templateUrl: './technologies.component.html',
  imports: [CommonModule],
})
@ComponentDecorator('technologies')
export class TechnologiesComponent {
  data = input.required<TechnologiesDataModel>();
  metadata = input.required<TechnologiesMetadataModel>();
  appearance = input.required<TechnologiesAppearanceModel>();
  children = input.required<LayoutModel[]>();
}
