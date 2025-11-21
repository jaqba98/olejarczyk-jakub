import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { Generator } from '../../generator/generator';
import { ComponentDecorator } from '../../decorator/component.decorator';
import { SectionDataItemModel } from '../../model/data/section-data.model';
import { SectionMetadataItemModel } from '../../model/metadata/section-metadata.model';
import { SectionAppearanceItemModel } from '../../model/appearance/section-appearance.model';
import { LayoutModel } from '../../model/layout/layout.model';

@Component({
  selector: 'section-component',
  templateUrl: './section.component.html',
  imports: [CommonModule, Generator],
})
@ComponentDecorator('section')
export class SectionComponent {
  data = input.required<SectionDataItemModel>();
  metadata = input.required<SectionMetadataItemModel>();
  appearance = input.required<SectionAppearanceItemModel>();
  children = input.required<LayoutModel[]>();

  getLayout(): LayoutModel {
    return {
      kind: 'group',
      children: this.children(),
    };
  }
}
