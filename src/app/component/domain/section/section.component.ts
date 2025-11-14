import { Component, input } from '@angular/core';

import { DomainComponentDecorator } from '../../../decorator/domain-component.decorator';
import { SectionDataModel } from '../../../data/model/section-data.model';
import { SectionMetadataModel } from '../../../metadata/model/section-metadata.model';
import { SectionAppearanceModel } from '../../../appearance/model/section-appearance.model';

@Component({
  selector: 'section-domain-component',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
})
@DomainComponentDecorator('section')
export class SectionComponent {
  data = input.required<SectionDataModel>();
  metadata = input.required<SectionMetadataModel>();
  appearance = input.required<SectionAppearanceModel>();
}
