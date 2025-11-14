import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomainComponentDecorator } from '../../../decorator/domain-component.decorator';
import { SectionDataModel } from '../../../data/model/section-data.model';
import { SectionMetadataModel } from '../../../metadata/model/section-metadata.model';
import { SectionAppearanceModel } from '../../../appearance/model/section-appearance.model';
import { BemUtil } from '../../../util/bem.util';

@Component({
  selector: 'section-domain-component',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
  imports: [CommonModule],
})
@DomainComponentDecorator('section')
export class SectionComponent {
  data = input.required<SectionDataModel>();
  metadata = input.required<SectionMetadataModel>();
  appearance = input.required<SectionAppearanceModel>();

  constructor(private readonly bemUtil: BemUtil) {}

  buildSectionClassList() {
    return [this.bemUtil.build('section', 'padding', this.appearance().root.padding)];
  }

  buildSectionContentClassList() {
    return [this.bemUtil.build('section', 'container', this.appearance().container.maxWidth)];
  }
}
