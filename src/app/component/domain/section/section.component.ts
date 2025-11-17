import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { DomainComponentDecorator } from '../../../decorator/domain-component.decorator';
import { SectionAppearanceModel } from '../../../model/appearance/section-appearance.model';
import { SectionDataModel } from '../../../model/data/section-data.model';
import { SectionMetadataModel } from '../../../model/metadata/section-metadata.model';
import { LayoutModel } from '../../../model/layout/layout.model';

@Component({
  selector: 'section-domain-component',
  templateUrl: './section.component.html',
  imports: [CommonModule],
})
@DomainComponentDecorator('section')
export class SectionComponent {
  data = input.required<SectionDataModel>();
  metadata = input.required<SectionMetadataModel>();
  appearance = input.required<SectionAppearanceModel>();
  children = input.required<LayoutModel[]>();

  buildChildrenLayoutModel(): any {
    // return {
    //   kind: 'group',
    //   children: this.children(),
    // };
  }
}
