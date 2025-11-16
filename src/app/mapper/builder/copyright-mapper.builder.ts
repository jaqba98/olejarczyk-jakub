import { Injectable } from '@angular/core';

import { CopyrightMapperModel } from '../../model/mapper/copyright-mapper.model';
import { RawStateModel } from '../../model/state/raw-state.model';

@Injectable({ providedIn: 'root' })
export class CopyrightMapperBuilder {
  build(state: RawStateModel): CopyrightMapperModel {
    const { firstName, lastName } = state.personal;
    const { creationYear } = state.website;
    const currYear = new Date().getFullYear();
    const year = creationYear === currYear ? `${currYear}` : `${creationYear} - ${currYear}`;
    return {
      copyright: `© ${year} ${firstName} ${lastName}. All rights reserved.`,
    };
  }
}
