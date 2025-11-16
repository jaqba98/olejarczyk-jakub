import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { DomainComponentDecorator } from '../../../decorator/domain-component.decorator';
import { ParagraphDataModel } from '../../../model/data/paragraph-data.model';
import { ParagraphMetadataModel } from '../../../metadata/model/paragraph-metadata.model';
import { ParagraphAppearanceModel } from '../../../appearance/model/paragraph-appearance.model';
import { LayoutModel } from '../../../layout/model/layout.model';

@Component({
  selector: 'paragraph-domain-component',
  templateUrl: './paragraph.component.html',
  imports: [CommonModule],
})
@DomainComponentDecorator('paragraph')
export class ParagraphComponent {
  data = input.required<ParagraphDataModel>();
  metadata = input.required<ParagraphMetadataModel>();
  appearance = input.required<ParagraphAppearanceModel>();
  children = input.required<LayoutModel[]>();
}
