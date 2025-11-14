import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { DomainComponentDecorator } from '../../../decorator/domain-component.decorator';
import { SectionAppearanceModel } from '../../../appearance/model/section-appearance.model';
import { SectionDataModel } from '../../../data/model/section-data.model';
import { SectionMetadataModel } from '../../../metadata/model/section-metadata.model';
import { BemUtil } from '../../../util/bem.util';
import { LayoutModel } from '../../../layout/model/layout.model';
import { Generator } from '../../../generator/generator';

@Component({
  selector: 'section-domain-component',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
  imports: [CommonModule, Generator],
})
@DomainComponentDecorator('section')
export class SectionComponent {
  data = input.required<SectionDataModel>();
  metadata = input.required<SectionMetadataModel>();
  appearance = input.required<SectionAppearanceModel>();
  children = input.required<LayoutModel[]>();

  constructor(private readonly bemUtil: BemUtil) {}

  buildSectionClassList() {
    const sectionColor = this.appearance().section.color;
    const sectionPadding = this.appearance().section.padding;
    return [
      this.bemUtil.build('section'),
      this.bemUtil.build('section', 'color', sectionColor),
      this.bemUtil.build('section', 'padding', sectionPadding),
    ];
  }

  buildSectionContentClassList() {
    const sectionContainerMaxWidth = this.appearance().section.container.maxWidth;
    return [
      this.bemUtil.build('section', 'container'),
      this.bemUtil.build('section', 'container', sectionContainerMaxWidth),
    ];
  }

  buildChildrenLayoutModel(): LayoutModel {
    return {
      kind: 'group',
      children: this.children(),
    };
  }
}
