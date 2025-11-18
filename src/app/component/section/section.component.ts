import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { ComponentDecorator } from '../../decorator/component.decorator';
import { SectionAppearanceValueModel } from '../../model/appearance/section-appearance.model';
import { LayoutModel } from '../../model/layout/layout.model';
import { SectionMetadataValueModel } from '../../model/metadata/section-metadata.model';
import { SectionDataValueModel } from '../../model/data/section-data.model';
import { Generator } from '../../generator/generator';

@Component({
  selector: 'section-component',
  templateUrl: './section.component.html',
  imports: [CommonModule, Generator],
})
@ComponentDecorator('section')
export class SectionComponent {
  data = input.required<SectionDataValueModel>();
  metadata = input.required<SectionMetadataValueModel>();
  appearance = input.required<SectionAppearanceValueModel>();
  children = input.required<LayoutModel[]>();

  getModel(): LayoutModel {
    return {
      kind: 'group',
      children: this.children(),
    };
  }
}
