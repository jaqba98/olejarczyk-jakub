import { Injectable } from '@angular/core';

import { RawStateModel } from '../../../model/state/raw-state.model';
import { DescriptionMapperModel } from '../../../model/mapper/description-mapper.model';

@Injectable({ providedIn: 'root' })
export class DescriptionMapperBuilder {
  build(state: RawStateModel): DescriptionMapperModel {
    const { description } = state.personal;
    return {
      data: {
        paragraphs: description,
      },
    };
  }
}
