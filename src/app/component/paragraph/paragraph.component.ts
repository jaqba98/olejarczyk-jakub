import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { ComponentDecorator } from '../../decorator/component.decorator';
import { ParagraphDataModel } from '../../model/data/paragraph-data.model';
import { ParagraphMetadataModel } from '../../model/metadata/paragraph-metadata.model';
import { ParagraphAppearanceModel } from '../../model/appearance/paragraph-appearance.model';
import { LayoutModel } from '../../model/layout/layout.model';

@Component({
  selector: 'paragraph-component',
  templateUrl: './paragraph.component.html',
  imports: [CommonModule],
})
@ComponentDecorator('paragraph')
export class ParagraphComponent {
  data = input.required<ParagraphDataModel>();
  metadata = input.required<ParagraphMetadataModel>();
  appearance = input.required<ParagraphAppearanceModel>();
  children = input.required<LayoutModel[]>();
}
