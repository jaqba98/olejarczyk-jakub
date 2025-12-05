import { Injectable } from '@angular/core';

import { RawStateModel } from '../../../model/state/raw-state.model';
import { CopyrightMapperModel } from '../../../model/mapper/copyright-mapper.model';

@Injectable({ providedIn: 'root' })
export class CopyrightMapperBuilder {
  build(state: RawStateModel): CopyrightMapperModel {
    const { firstName, lastName } = state.personal;
    const { creationYear } = state.website;
    const currYear = new Date().getFullYear();
    const year = creationYear === currYear ? `${creationYear}` : `${creationYear} - ${currYear}`;
    const copyright = `© ${year} ${firstName} ${lastName}. All rights reserved.`;
    return {
      paragraph: {
        paragraphs: [copyright],
      },
    };
  }
}
