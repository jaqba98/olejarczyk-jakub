import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { DomainComponentDecorator } from '../../../decorator/domain-component.decorator';
import { SectionAppearanceModel } from '../../../appearance/model/section-appearance.model';
import { SectionDataModel } from '../../../model/data/section-data.model';
import { SectionMetadataModel } from '../../../metadata/model/section-metadata.model';
import { LayoutModel } from '../../../layout/model/layout.model';
import { Generator } from '../../../generator/generator';

@Component({
  selector: 'section-domain-component',
  templateUrl: './section.component.html',
  imports: [CommonModule, Generator],
})
@DomainComponentDecorator('section')
export class SectionComponent {
  data = input.required<SectionDataModel>();
  metadata = input.required<SectionMetadataModel>();
  appearance = input.required<SectionAppearanceModel>();
  children = input.required<LayoutModel[]>();

  buildChildrenLayoutModel(): LayoutModel {
    return {
      kind: 'group',
      children: this.children(),
    };
  }
}
